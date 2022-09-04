<template>
  <the-header @show="show"></the-header>
  <component :is="selected" :projects="projects"></component>
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
      selected: "the-projects",
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
    show(showProjects) {
      if(showProjects){
        this.selected="the-projects";
      }
      else{
        this.selected="add-project";
      }
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
