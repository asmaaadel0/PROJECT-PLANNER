import { createRouter, createWebHistory } from "vue-router";
import TheProjects from "../pages/TheProjects.vue";
import AddProject from "../pages/AddProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/projects",
      name: "TheProjects",
      alias: "/",
      component: TheProjects,
      props: true,
    },
    {
      path: "/addProject",
      name: "AddProject",
      component: AddProject,
      props: true,
    },
  ],
});
export default router;
