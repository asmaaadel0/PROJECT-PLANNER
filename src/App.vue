<template>
  <the-header @show="show"></the-header>
  <the-projects
    v-if="showProjects"
    :projects="projects"
    @deleteProject="deleteProject"
    @completeProject="completeProject"
    :completedProjects="completedProjects"
    :isGoingProjects="isGoingProjects"
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
          title: "Create new homepage banner",
          isComplete: false,
          description: "Some details about course.",
        },
        {
          title: "Make marketing email",
          isComplete: false,
          description: "Some details about course.",
        },
        {
          title: "Update promo links",
          isComplete: false,
          description: "Some details about course.",
        },
      ],
      completedProjects: [],
      isGoingProjects: [],
    };
  },
  beforeMount() {
    this.completedProjects = this.projects.filter((t) => {
      return t.isComplete !== false;
    });
    this.isGoingProjects = this.projects.filter((t) => {
      return t.isComplete !== true;
    });
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
    deleteProject(title) {
      const index = this.projects.findIndex(
        (project) => project.title === title
      );
      this.projects.splice(index, 1);
      this.completedProjects = this.projects.filter((t) => {
        return t.isComplete !== false;
      });
      this.isGoingProjects = this.projects.filter((t) => {
        return t.isComplete !== true;
      });
    },
    completeProject(title) {
      const p = this.projects.find((project) => project.title === title);
      p.isComplete = !p.isComplete;
      this.completedProjects = this.projects.filter((t) => {
        return t.isComplete !== false;
      });
      this.isGoingProjects = this.projects.filter((t) => {
        return t.isComplete !== true;
      });
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
