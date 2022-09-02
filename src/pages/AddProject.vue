<template>
  <div class="about">
    <adding-form @add="addProject"></adding-form>
  </div>
</template>
<script>
import AddingForm from '../components/ui/AddingForm.vue'



export default {
  components: {
    AddingForm,
  },
  data() {
    return {
      titles: [],
    }
  },
  methods: {
    addProject(title, description) {
      const project = {
        title: description,
        isComplete: false,
        isGoing: false,
        description: description,
      }
      fetch(
        "https://project-planner-660cf-default-rtdb.firebaseio.com/projects.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: project.title,
            isComplete: project.isComplete,
            isGoing: project.isGoing,
            description: project.description,
          }),
        }
      ).then(response => {
        if (response.ok) {
          //...
        }
        else {
          throw new Error('could not save data!');
        }
      }).catch(error => {
        console.log(error);
        this.error = error.message;
      });
      this.$router.replace('/projects');
    },
  }
}
</script>

