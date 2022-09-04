<template>
  <base-card :class="{ complete: isComplete }">
    <ul>
      <h2>{{ project.title }}</h2>
      <li>
        <div class="icons">
          <svg
            @click="deleteProject(project.title)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
            />
          </svg>

          <svg
            @click="completeProject()"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check2-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
            />
            <path
              d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
            />
          </svg>
        </div>
      </li>
    </ul>
  </base-card>
</template>
<script>
import baseCard from "./ui/baseCard.vue";
export default {
  data() {
    return {
      isComplete: false,
    };
  },
  components: {
    baseCard,
  },
  props: ["project"],
  methods: {
    deleteProject(title) {
      this.$emit("deleteProject", title);
    },
    completeProject() {
      this.isComplete = !this.isComplete;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  text-decoration: none;
}
.base {
  border-left: 5px solid fuchsia;
}

svg {
  padding: 0px;
  margin-left: 3rem;
  color: gray;
}

svg:hover {
  color: black;
}

li {
  display: inline;
}

.icons {
  text-align: end;
  /* display: inline; */
}
.complete {
  border-left: 5px solid green;
}
</style>
