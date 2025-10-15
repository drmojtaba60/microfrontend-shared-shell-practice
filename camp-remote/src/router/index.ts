import CampList from '@/views/camp-list/index.vue';
import NotFound from '@/views/not-found/Index.vue';
import CampDetail from '@/views/camp/Detail.vue';
import { createRouter, createWebHistory } from 'vue-router';

// 📌 Composable از Auth Remote
//import { useAuth } from 'auth-remote/use-auth'

const routes = [
   { path: '/', component: CampList },
   { path: '/:id', component: CampDetail,meta: { requiresAuth: true } },
   { path: '/:pathMatch(.*)*',name: 'not-found',component:NotFound}
  //{ path: '/:pathMatch(.*)*', redirect: '/' }
  // { path: '/products/', component: ProductList ,meta:{public:true}},
  // { path: '/products/:id', component: ProductDetail ,meta: { requiresAuth: true }}
]
export default routes;
// export default createRouter({
//   history: createWebHistory('/products'),
//   routes
// })

// 👇 یک تابع بساز، نه export ثابت
export function createAppRouter(base: string = '') {
  return createRouter({
    history: createWebHistory(base),
    routes
  })


  }
