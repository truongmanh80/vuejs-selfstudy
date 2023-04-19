import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecondView from "@/views/SecondView.vue";
import ElementFormExample from "@/views/ElementFormExample.vue";
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
import ElementPlusExample from "@/views/ElementPlusExample.vue";
import ElementBasicExample from "@/views/ElementBasicExample.vue";
import ButtonExample from "@/components/elementplus/basic/ButtonExample.vue";
import BorderExample from "@/components/elementplus/basic/BorderExample.vue";
import LayoutContainerExample from "@/components/elementplus/basic/LayoutContainerExample.vue";
import IconExample from "@/components/elementplus/basic/IconExample.vue";
import LayoutExample from "@/components/elementplus/basic/LayoutExample.vue";
import ScrollbarExample from "@/components/elementplus/basic/ScrollbarExample.vue";
import AutocompleteExample from "@/components/elementplus/form/AutocompleteExample.vue";
import CascaderExample from "@/components/elementplus/form/CascaderExample.vue";
import CheckboxExample from "@/components/elementplus/form/CheckboxExample.vue";
import ColorPickerExample from "@/components/elementplus/form/ColorPickerExample.vue";
import DatePickerExample from "@/components/elementplus/form/DatePickerExample.vue";

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
      path: '/element-plus',
      name: 'element-plus',
      component: ElementPlusExample,
      children: [
          {
            path: '/basic',
            name: 'basic',
            component: ElementBasicExample,
            children: [
              {
                path: '/button',
                name: 'button',
                component: ButtonExample
              },
              {
                path: '/border',
                name: 'border',
                component: BorderExample
              },
              {
                path: '/layout-container',
                name: 'layout-container',
                component: LayoutContainerExample
              },
              {
                path: '/icon',
                name: 'icon',
                component: IconExample
              },
              {
                path: '/layout',
                name: 'layout',
                component: LayoutExample
              },
              {
                path: '/scrollbar',
                name: 'scrollbar',
                component: ScrollbarExample
              },
            ]
          },
          {
            path: '/form',
            name: 'form',
            component: ElementFormExample,
            children: [
              {
                path: '/autocomplete',
                name: 'autocomplete',
                component: AutocompleteExample
              },
              {
                path: '/cascader',
                name: 'cascader',
                component: CascaderExample
              },
              {
                path: '/checkbox',
                name: 'checkbox',
                component: CheckboxExample
              },
              {
                path: '/colorpicker',
                name: 'colorpicker',
                component: ColorPickerExample
              },
              {
                path: '/datepicker',
                name: 'datepicker',
                component: DatePickerExample
              },
              // {
              //   path: '/autocomplete',
              //   name: 'autocomplete',
              //   component: AutocompleteExample
              // },
              // {
              //   path: '/autocomplete',
              //   name: 'autocomplete',
              //   component: AutocompleteExample
              // },
              // {
              //   path: '/autocomplete',
              //   name: 'autocomplete',
              //   component: AutocompleteExample
              // },
              // {
              //   path: '/autocomplete',
              //   name: 'autocomplete',
              //   component: AutocompleteExample
              // },
            ]
          },
      ]
      // children: [
      //   {
      //     path: '/basic/button',
      //     name: 'button',
      //     component: ButtonExample
      //   },
      //   {
      //     path: '/basic/border',
      //     name: 'border',
      //     component: BorderExample
      //   },
      //   {
      //     path: '/basic/layout-container',
      //     name: 'layout-container',
      //     component: LayoutContainerExample
      //   },
      //   {
      //     path: '/basic/icon',
      //     name: 'icon',
      //     component: IconExample
      //   },
      //   {
      //     path: '/basic/layout',
      //     name: 'layout',
      //     component: LayoutExample
      //   },
      //   {
      //     path: '/basic/scrollbar',
      //     name: 'scrollbar',
      //     component: ScrollbarExample
      //   },
      // ]
    },
    {
      path: '/hook',
      name: 'hook',
      component: HookExample,
      children: [
        {
          path: '/setup',
          name: 'setup',
          component: SetupExample,
          props: true
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
