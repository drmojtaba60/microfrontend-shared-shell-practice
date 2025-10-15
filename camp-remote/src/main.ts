// import { createApp } from 'vue'
// import './style.css'
// import { createAppRouter } from './router'
// import App from './App.vue'

// const app = createApp(App)

// // 👇 در standalone همیشه base = '/'
// const router = createAppRouter()
// app.use(router)

// app.mount('#app')


import { mount } from '@/BootStrap'
const el:HTMLElement|null = document.querySelector('#app')

// standalone باید base = '/' باشه  // حالت standalone → فقط وقتی مستقیم npm run dev می‌کنی
  if (el) {
    mount(el, import.meta.env.MODE === 'development' ? {base:'/',isAuthenticated:true} : {base:'/camps',isAuthenticated:true})
  }
