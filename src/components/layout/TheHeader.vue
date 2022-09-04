<template>
  <nav>
    <button :class="{ clicked: showProjects }" @click="projects">
      Projects</button
    >|
    <button :class="{ clicked: showAddProjects }" @click="addProjects">
      Add Projects
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showProjects: true,
      showAddProjects: false,
    };
  },
  methods: {
    projects() {
      this.showProjects = true;
      this.showAddProjects = false;
      this.$emit("show", this.showProjects, this.showAddProjects);
    },
    addProjects() {
      this.showAddProjects = true;
      this.showProjects = false;
      this.$emit("show", this.showProjects, this.showAddProjects);
    },
  },
};
</script>

<style scoped>
nav {
  text-align: center;
  padding: 30px;
}

nav button {
  font-size: 20px;
  font-weight: bold;
  color: rgb(143, 142, 142);
  background: rgb(238, 238, 238);
  text-decoration: none;
  padding: 10px;
  border: none;
  margin: 1rem;
}

nav button:hover {
  cursor: pointer;
  color: black;
}

.clicked {
  color: black;
  border-bottom: 4px solid rgb(41, 215, 204);
}
</style>
