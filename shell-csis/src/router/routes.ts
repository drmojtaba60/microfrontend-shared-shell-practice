import {ref} from "vue";
import type { RouteRecordRaw } from 'vue-router';
import RemoteMount from '@/components/RemoteMount.vue'
import Home from "@/views/Home.vue";


const isAuth=ref(false);
const routes :Array<RouteRecordRaw>= [
  { path: '/', component: Home },
  { name:'shellLoginRoute',path: '/login', component: () => import('@/views/Login.vue') },
  //{ name:'shellLoginRoute',path: '/login', component: () => import('auth-remote/LoginView') },
  //{ path: '/logout', component: () => import('auth-remote/LogoutView') },
  // Remote Apps
  { path: '/camps/:pathMatch(.*)*', component: RemoteMount, props: { remote: 'camp-remote', module: 'BootStrap', base: '/camps',isAuthenticated:true, }, },
  // { path: '/users/:pathMatch(.*)*', component: RemoteMount, props: { remote: 'user_app', module: 'App', base: '/users',isAuthenticated:true } },
  // { path: '/orders/:pathMatch(.*)*', component: RemoteMount, props: { remote: 'orders_app', module: 'App', base: '/orders',isAuthenticated:true } },
  // { path: '/tasks/:pathMatch(.*)*', component: RemoteMount, props: { remote: 'tasks_app', module: 'App', base: '/tasks',isAuthenticated:true }},
  // { path: '/auth/:pathMatch(.*)*', component: RemoteMount, props: { remote: 'auth-remote', module: 'App', base: '/auth' ,isAuthenticated:true} }
]
export default routes;
