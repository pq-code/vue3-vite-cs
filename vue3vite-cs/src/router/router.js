import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from "../views/home/home.vue";

const routes= [
  {
    path: "/",
    component: home,
    name: "home",
    // leaf: true,//只有一个节点
    children: [
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
      }, //默认首页
    ],
    meta: { hidden: false, title: "首页" },
  },
//   {
//     path: "/blog",
//     name: "blog",
//     component: () =>
//         import(/* webpackChunkName: "about" */ "../views/blog/blogHome.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
