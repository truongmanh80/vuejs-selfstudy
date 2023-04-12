import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecondView from "@/views/SecondView.vue";
import ElementForm from "@/views/ElementForm.vue";
import ThirdView from "@/views/ThirdView.vue";
import HookExample from "@/views/HookExample.vue";
import SetupExample from "@/components/hookexamples/SetupExample.vue";
import BeforeCreateExample from "@/components/hookexamples/BeforeCreateExample.vue";
import CreatedExample from "@/components/hookexamples/CreatedExample.vue";
import BeforeMountExample from "@/components/hookexamples/BeforeMountExample.vue";
import MountedExample from "@/components/hookexamples/MountedExample.vue";
import UpdatedExample from "@/components/hookexamples/UpdatedExample.vue";
import BeforeUpdateExample from "@/components/hookexamples/BeforeUpdateExample.vue";
import UnmountedExample from "@/components/hookexamples/UnmountedExample.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/second',
      name: 'second',
      component: SecondView
    },
    {
      path: '/third',
      name: 'third',
      component: ThirdView
    },
    {
      path: '/form',
      name: 'form',
      component: ElementForm
    },
    {
      path: '/hook',
      name: 'hook',
      component: HookExample,
      children: [
        {
          path: '/setup',
          name: 'setup',
          component: SetupExample
        },
        {
          path: '/before-create',
          name: 'setup-create',
          component: BeforeCreateExample
        },
        {
          path: '/create',
          name: 'create',
          component: CreatedExample
        },
        {
          path: '/before-mount',
          name: 'before-mount',
          component: BeforeMountExample
        },
        {
          path: '/mount',
          name: 'mount',
          component: MountedExample
        },
        {
          path: '/before-update',
          name: 'before-update',
          component: BeforeUpdateExample
        },
        {
          path: '/update',
          name: 'update',
          component: UpdatedExample
        },
        {
          path: '/unmount',
          name: 'unmount',
          component: UnmountedExample
        }
      ]
    },
  ]
})

export default router
