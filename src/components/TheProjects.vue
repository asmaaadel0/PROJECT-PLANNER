<template>
  <div class="buttons">
    <button @click="viewAllButton" :class="{ clicked: viewAll }">
      VIEW ALL
    </button>
    <button @click="completedButton" :class="{ clicked: completed }">
      COMPLETED
    </button>
    <button @click="onGoingButton" :class="{ clicked: onGoing }">
      ONGOING
    </button>
  </div>
  <project-item
    v-for="project in projectsShow"
    :key="project.title"
    :project="project"
    @deleteProject="deleteProject"
    @completeProject="completeProject"
  ></project-item>
</template>

<script>
import projectItem from "./projectItem.vue";
export default {
  props: ["projects", "completedProjects", "isGoingProjects"],
  emits: ["deleteProject", "complete"],
  data() {
    return {
      viewAll: true,
      completed: false,
      onGoing: false,
      projectsShow: this.projects,
    };
  },
  components: {
    projectItem,
  },
  methods: {
    viewAllButton() {
      this.viewAll = true;
      this.completed = false;
      this.onGoing = false;
      this.projectsShow = this.projects;
    },
    completedButton() {
      this.viewAll = false;
      this.completed = true;
      this.onGoing = false;
      this.projectsShow = this.completedProjects;
    },
    onGoingButton() {
      this.viewAll = false;
      this.completed = false;
      this.onGoing = true;
      this.projectsShow = this.isGoingProjects;
    },
    deleteProject(index) {
      this.$emit("deleteProject", index);
    },
    completeProject(title) {
      this.$emit("completeProject", title);
    },
  },
};
</script>

<style scoped>
.buttons {
  text-align: center;
}

button,
a {
  background: rgb(238, 238, 238);
  border: none;
  font-weight: bold;
  color: rgb(143, 142, 142);
  padding: 1%;
  margin: 0rem;
  text-decoration: none;
}

button:hover {
  cursor: pointer;
  color: black;
}

.clicked {
  color: black;
}
</style>
