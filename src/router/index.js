import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/components/NotFound.vue";
import SingalPost from "@/components/SingalPost.vue";
import Posts from "@/components/Posts.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/posts", component: Posts, name: "Post" },
  { path: "/post/:id", component: SingalPost, name: "SingalPost" },
  { path: "/:pathMatch(.*)", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
});
export default router;
