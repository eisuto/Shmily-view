import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/home",
        name: "main",
        component: () => import("@/views/Main"),
        children: [
            // 个人主页
            {
                path: "/home",
                component: () => import("@/views/Home/Home")
            },
            // 探索
            {
                path: '/explore',
                component: () => import("@/views/Explore")
            },
            // 通知
            {
                path: "/notifications",
                component: () => import("@/views/Notifications")
            },
            // 私信
            {
                path: "/messages",
                component: () => import("@/views/Messages")
            },
            // 书签
            {
                path: "/bookmarks",
                component: () => import("@/views/Bookmarks")
            },
            // 列表
            {
                path: "/lists",
                component: () => import("@/views/Lists")
            },
            // 个人资料
            {
                path: "/profile",
                component: () => import("@/views/Profile")
            },
            // 更多
            {
                path: "*",
                redirect: "home"
            }

        ]
    },


];

const router = new VueRouter({
    mode: "history",
    base: process.env.baseURL,
    routes
});
// router.beforeEach((to, from, next) => {
//   if (to.name != 'user') {
//     router.push({
//       name: 'Login'
//     });
//   } else {
//     next();
//   }
// });

export default router;
