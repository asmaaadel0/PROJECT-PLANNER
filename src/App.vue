<template>
  <the-header @show="show"></the-header>
  <the-projects
    v-if="showProjects"
    :projects="projects"
    @deleteProject="deleteProject"
  ></the-projects>
  <add-project v-if="this.showAddProject" @add="addProject"></add-project>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheProjects from "./components/TheProjects.vue";
import AddProject from "./components/AddProject.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheProjects,
    AddProject,
  },
  data() {
    return {
      showProjects: true,
      showAddProject: false,
      projects: [
        {
          title: "Create homepage banner",
          isComplete: false,
          isGoing: false,
          description: "Some details about create homepage banner.",
        },
        {
          title: "Create homepage",
          isComplete: false,
          isGoing: false,
          description: "Some details about create homepage banner.",
        },
        {
          title: "Create",
          isComplete: false,
          isGoing: false,
          description: "Some details about create homepage banner.",
        },
      ],
      completedProjects: [],
      isGoingProjects: [],
    };
  },
  methods: {
    show(showProjects, showAddProject) {
      this.showProjects = showProjects;
      this.showAddProject = showAddProject;
    },
    addProject(title, description) {
      this.projects.push({
        title: title,
        isComplete: false,
        isGoing: false,
        description: description,
      });
      this.showProjects = true;
      this.showAddProject = false;
    },
    deleteProject(index) {
      this.projects.splice(index, 1);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background-color: rgb(238, 238, 238);
}

body {
  margin: 0;
}
</style>
