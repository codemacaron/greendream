import Vue from "vue";
import Router from "vue-router";
import Main from "@/view/Main";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    }
  ]
});
