import TodoDetail from "@/views/TodoDetail.vue";
import TodoLIst from "@/views/TodoLIst.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", redirect: "/todo" },
  { path: "/todo", component: TodoLIst },
  { path: "/todo/:id", component: TodoDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { router };
