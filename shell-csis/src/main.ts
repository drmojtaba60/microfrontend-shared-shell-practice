// import { createApp } from 'vue'
// //import './style.css'
// import router from './router'
// import App from './App.vue'
//
// const app = createApp(App)
//
// // 👇 در standalone همیشه base = '/'
//
// app.use(router)
//
// app.mount('#app')
//
// console.log('main start')
//

import { mount } from '@/BootStrap';
const el:HTMLElement|null = document.querySelector('#app')

// standalone باید base = '/' باشه  // حالت standalone → فقط وقتی مستقیم npm run dev می‌کنی
  if (el) {
    mount(el, import.meta.env.MODE === 'development' ? {base:'/',isAuthenticated:true} : {base:'/',isAuthenticated:true})
  }

