import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import { federation } from '@module-federation/vite'
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
  plugins: [
    vue(),
    federation({
      //manifest: true, // این خط باعث تولید remoteEntry.js در حالت dev می‌شود
      name: 'camp-remote',
      filename: 'remoteEntry.js',
      exposes:{
        './BootStrap': './src/BootStrap.ts',
      },
      remotes: ({
        // 'shared-features': {
        //   name: 'shared-features',
        //   type: 'module',
        //   entry: 'http://localhost:3001/assets/remoteEntry.js',
        // },
        'shared-features':'http://localhost:3001/assets/remoteEntry.js',
        '@shared-packages':'http://localhost:5001/assets/remoteEntry.js',

      }as Record<string, any>),
      shared: ['vue', 'vue-router', 'pinia'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    port: 3002,
    cors: true,
    open: true,
  },

  preview: {
    port: 3002,
    cors: true,
  },

  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: true,
    sourcemap: true, // برای دیباگ
    rollupOptions: {
      output: {
        manualChunks: undefined, // اجازه دهید Vite خودش مدیریت کند
      }
    }
  }
})
