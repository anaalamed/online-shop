import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ItemView from "../views/ItemView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/item/:id",
    name: "Item",
    component: ItemView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
