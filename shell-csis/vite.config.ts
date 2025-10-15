import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import { federation } from '@module-federation/vite'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: ({
        // 'shared-features': {
        //   name: 'shared-features',
        //   type: 'module',
        //   entry: 'http://localhost:3001/remoteEntry.js',
        // },
        'shared-features':  'http://localhost:3001/assets/remoteEntry.js',
        '@shared-packages':  'http://localhost:5001/assets/remoteEntry.js',
        'camp-remote': 'http://localhost:3002/assets/remoteEntry.js',
        'insurance-remote': 'http://localhost:3003/assets/remoteEntry.js',
      } as Record<string, any>),
      //shared: ['vue', 'vue-router', 'pinia'],
      shared:({
        vue:{singleton :true,eager:true,requiredVersion:false},
        'vue-router':{singleton :true,eager:true,requiredVersion:false},
        pinia:{singleton :true,eager:true,requiredVersion:false},
      } as Record<any, any>),
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    port: 3000,
    cors: true,
    open: true,
  },

  preview: {
    port: 8000,
    cors: true,
  },

  build: {
    target: 'esnext',
  }
})
