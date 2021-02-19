import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.esm.min";

import urql from "@urql/vue";

import root from "./root/root.vue";
import router from "./root/router";

const urqlOptions = { url: "http://localhost:2099/graphql" };

createApp(root).use(router).use(urql, urqlOptions).mount("#root");
