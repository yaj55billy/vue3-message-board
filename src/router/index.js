import { createRouter, createWebHashHistory } from 'vue-router';
import BoardLayoutView from '../views/BoardLayoutView.vue';
import HomeView from '../views/HomeView.vue';
import CreatePostView from '../views/CreatePostView.vue';
import SignUpView from '../views/SignUpView.vue';
import SignInView from '../views/SignInView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BoardLayout',
      component: BoardLayoutView,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/createpost',
          name: 'CreatePost',
          component: CreatePostView
        }
      ]
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
    },
  ]
});

export default router;
