/**
 * 
 * You can edit navigation bar in components/app/AppNavbar
 * 
 */
import HomeView from '@/views/HomeView.vue';
/**
 * 
 */
import Forbidden from '@/views/base/Forbidden.vue';
import NotFound from '@/views/base/NotFound.vue';
import ServerError from '@/views/base/ServerError.vue';

/**
 * 
 * meta { ... } properties is customized.
 * 
 * meta: {
 *   title: 'Support Centor - Example Company',
 * }
 * 
 * meta.title : Uses in utils/composable/useSeo.js
 */

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/AboutView.vue'),
  // },

  ///////////////////////////////
  {
    path: '/403',
    name: 'Forbidden',
    component: Forbidden,
  },

  // 500 Internal Server Error
  {
    path: '/500',
    name: 'ServerError',
    component: ServerError,
  },

  // 404 Not Found - catch all
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes;
