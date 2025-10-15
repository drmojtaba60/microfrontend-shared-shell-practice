import {createRouter, createWebHistory, type Router} from 'vue-router'
import {ref} from "vue";
import routes from "@/router/routes.ts";



const isAuth=ref(false);
function checkGuardsOnRoutes(router:Router){
  //const { isLoggedIn } = useAuth();

  //isAuth.value=isLoggedIn.value;
  router.beforeEach((to,from,next) => {
    //const { isLoggedIn } = useAuth();
    // چک کردن همه route recordها (parent + child)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuth) {
        return next('/login')
      }
    }
    next();
  });
}



const router = createRouter({
  history: createWebHistory(),
  routes
});
checkGuardsOnRoutes(router);


export default router ;
