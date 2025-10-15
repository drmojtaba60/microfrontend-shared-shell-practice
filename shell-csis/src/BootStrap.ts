
import { createApp } from "vue"
import {createRouter, createWebHistory,type Router} from "vue-router"
import routes from  '@/router/routes';
//import { eventBus } from 'shared/eventBus';
//import useAuth from 'shell/useAuth';
import { createPinia } from "pinia";
//import { vuetify } from '@shared-packages/vuetify'
import primevuePlugin from '@shared-packages/primevue';
import antd from '@shared-packages/antd-plugin'
import '@/assets/main.css'
import App from "@/App.vue";

// 👇 ایمپورت از auth-remote

//import  useAuth  from 'auth-remote/use-auth'
// @ts-ignore
//import  useAuth  from 'shell/useAuthShell'
//import * as authModule from 'auth-remote/use-auth';
let channel:BroadcastChannel;
//const auth=useAuth();
export const mount = (el: HTMLElement,props={ base :'/',isAuthenticated:true,}) => {
  channel = new BroadcastChannel('remote-apps-channel');
  // console.log('useAuth:', useAuth())
  const router = createRouter({
    history: createWebHistory(props.base),
    routes
  });
  processesGuardOnRoutes(router,props.isAuthenticated);

  const app = createApp(App)  // 👈 اینجا استفاده میشه
  const pinia=createPinia();
  app.use(pinia);
  app.use(router)
  app.use(primevuePlugin)
  antd.install(app)

  //app.use(vuetify)
  app.mount(el)                         // 👈 دقیقا اینجا به DOM وصل میشه
}
function processesGuardOnRoutes(router: Router,isAuthenticated:boolean) {
  // eventBus.on('auth:login',()=>{
  //   console.log('eventBus.on.auth:login',{isLoggedInvalue:auth.isLoggedIn.value});
  // });
  //console.log({isLoggedIn:auth.isLoggedIn,isLoggedInvalue:auth.isLoggedIn.value});
  // router.beforeEach((to, from, next) => {
  //   if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
  //     console.log({auth});
  //
  //     eventBus.emit('auth:required',to);
  //     next(false);
  //     //return next({name:'shellLoginRoute'});//next('/login')
  //   }
  //   //else next()
  //   next()
  // })
}
function processesGuardOnRoutesWithCustomEvent(router: Router,isAuthenticated:boolean) {
  router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !isAuthenticated) {
      //window.location.href='http://localhost:3000/login?path='+to.fullPath;
      const evRouting=new CustomEvent('remoteApp:needAuth',{detail:to});
      window.dispatchEvent(evRouting);
      channel.postMessage({
        type: "REMOTEAPP_NEED_AUTH",
        payload: JSON.stringify(to)
      })
      //return next({name:'shellLoginRoute'});//next('/login')
    }
    //else next()
    next()
  })
}
// federation اینو به Shell می‌ده
export default { mount }
