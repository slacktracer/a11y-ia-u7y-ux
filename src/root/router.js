import { createWebHistory, createRouter } from "vue-router";

import About from "../about/about.vue";
import Agencies from "../agencies/agencies.vue";
import Home from "../home/home.vue";
import Hospitals from "../hospitals/hospitals.vue";
import User from "../user/user.vue";
import Users from "../users/users.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/agencies",
    name: "Agencies",
    component: Agencies,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hospitals",
    name: "Hospitals",
    component: Hospitals,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
