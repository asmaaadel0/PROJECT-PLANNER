<template>
  <div class="projects">
    <div class="buttons">
      <a @click="viewAllButton" :class="{ clicked: viewAll }">VIEW ALL</a>
      <a @click="completedButton" :class="{ clicked: completed }">COMPLETED</a>
      <a @click="onGoingButton" :class="{ clicked: onGoing }">ONGOING</a>
    </div>
    <project-list :viewAll="viewAll" :completed="completed" :onGoing="onGoing"></project-list>

  </div>
</template>
<script>
import projectList from '../components/projectList.vue';
export default {
  components: { projectList },
  data() {
    return {
      viewAll: true,
      completed: false,
      onGoing: false,
    }
  },
  methods: {
    viewAllButton() {
      this.viewAll = true;
      this.completed = false;
      this.onGoing = false;
    },
    completedButton() {
      this.viewAll = false;
      this.completed = true;
      this.onGoing = false;
    },
    onGoingButton() {
      this.viewAll = false;
      this.completed = false;
      this.onGoing = true;
    }
  }
}
</script>
<style scoped>
.buttons {
  margin-left: -20rem;
  margin-top: 3rem;
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

a:hover,
a:active {
  cursor: pointer;
  color: black;
}

.clicked {
  color: black;
}
</style>
