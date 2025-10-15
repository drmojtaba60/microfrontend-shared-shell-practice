import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: '@shared-packages',  // نام منحصربه‌فرد
      filename: 'remoteEntry.js',  // فایل ورودی
      exposes: {
        //"./packages": './src/packages/index.ts',
        "./vuetify":"./src/packages/vuetify/index.ts",
        "./antd-plugin":"./src/packages/ant-design-vue/plugin.ts",
        "./antd":"./src/packages/ant-design-vue/antd-auto-export.ts",
        "./antd/components":"./src/packages/ant-design-vue/antd-components-export",
        //"./primevue":"./src/packages/primevue/primevue-auto-export.ts",
        "./primevue":"./src/packages/primevue/plugin.ts",
        //"./primevue-components":"./src/packages/primevue/primevue-components-export.ts",
        "./fonts/vazirmatn":"./src/packages/fonts/vazirmatn.ts",
        "./icons/antd-icons":"./src/packages/icons/ant-design-icons/index.ts",
      },
      shared: ['vue',{vuetify: ({ singleton: true, eager: false, requiredVersion:false} as any)}],  // اشتراک‌گذاری وابستگی‌ها
      //manifest: true, // این خط باعث تولید remoteEntry.js در حالت dev می‌شود
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 5001,
    cors:true,
    origin: 'http://localhost:5001',  // فعال کردن سرویس‌دهی در حالت توسعه
  },
  preview:{
    port:5001,
    cors:true,
  },
  build: {
    target: 'esnext',  // یا 'chrome89' برای سازگاری بیشتر
    cssCodeSplit: false,
  },
})
