import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
//import { federation } from '@module-federation/vite'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'shared-features',  // نام منحصربه‌فرد
      filename: 'remoteEntry.js',  // فایل ورودی
      exposes: {
        "./stores": './src/stores',
      },
      shared: ['vue', 'vue-router','pinia'],  // اشتراک‌گذاری وابستگی‌ها
      //manifest: true, // این خط باعث تولید remoteEntry.js در حالت dev می‌شود
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3001,
    origin: 'http://localhost:3001',  // فعال کردن سرویس‌دهی در حالت توسعه
  },
  build: {
    target: 'esnext',  // یا 'chrome89' برای سازگاری بیشتر
    cssCodeSplit: false,
  },
})
