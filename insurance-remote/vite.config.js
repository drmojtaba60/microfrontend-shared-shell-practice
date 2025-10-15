import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      //manifest: true, // این خط باعث تولید remoteEntry.js در حالت dev می‌شود
      name: "insurance-remote",
      filename: "remoteEntry.js",
      remotes:{
        'shared-features':'http://localhost:3001/assets/remoteEntry.js',
        '@shared-packages':'http://localhost:4001/assets/remoteEntry.js',
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    port: 3003,
    compress: true,
    cors: true,
    open: true,
  },
  preview: {
    port: 3003,
    compress: true,
    cors: true,
  }
})
