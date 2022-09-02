<template>
    <button @click="loadProjects">Refresh</button>
    <div v-if="viewAll">
        <project-item v-for="title in titles" :key="title.id" :project="title" @del="deletePro" @com="completePro">
        </project-item>
    </div>
    <div v-if="completed">
        <project-item v-for="title in completedTitles" :key="title.id" :project="title" @del="deletePro"
            @com="completePro">
        </project-item>
    </div>
    <div v-if="onGoing">
        <project-item v-for="title in isGoingTitle" :key="title.id" :project="title" @del="deletePro"
            @com="completePro">
        </project-item>
    </div>
</template>

<script>
import projectItem from '../components/ui/projectItem.vue';
export default {
    components: { projectItem },
    emits: ["titles"],
    props: ["viewAll", "completed", "onGoing"],
    data() {
        return {
            titles: [
                {
                    id: "Create homepage banner",
                    isComplete: false,
                    isGoing: false,
                    description: "Some details about create homepage banner."
                },],
            completedTitles: [],
            isGoingTitle: []
        }
    },
    methods: {
        loadProjects() {
            fetch("https://project-planner-660cf-default-rtdb.firebaseio.com/projects.json")
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const results = [];
                    for (const id in data) {
                        results.push({
                            idTitl: id,
                            id: data[id].title,
                            isComplete: data[id].isComplete,
                            isGoing: data[id].isGoing,
                            description: data[id].description,
                        });
                    }
                    this.titles = results;
                    this.completedTitles = this.titles.filter((t) => {
                        return t.isComplete !== false;
                    });
                    this.isGoingTitle = this.titles.filter((t) => {
                        return t.isComplete !== true;
                    })
                })
                .catch((error) => {
                    this.error = "Failed to fetch data - please try again later";
                    this.isLoading = false;
                    console.log(error);
                });
        },
        deletePro(title) {
            this.titles = this.titles.filter((titl) => titl.id !== title);
        },
        completePro(title) {
            this.titles.find(function (titl) {
                if (titl.id === title) {
                    titl.isComplete = !titl.isComplete;
                }
            });
            this.completedTitles = this.titles.filter((t) => {
                return t.isComplete !== false;
            });
            this.isGoingTitle = this.titles.filter((t) => {
                return t.isComplete !== true;
            })
            this.$emit("projects", this.titles);
        },

    },
    mounted() {
        this.loadProjects();

    },
}
</script>

<style scoped>
button {
    background-color:  rgb(41, 215, 204);
    border: none;
    color: white;
    padding: 0.6rem;
    width: 7rem;
    margin: 1rem;
    margin-top: 2rem;
    border-radius: 0.4rem;
}
button:hover{
    background-color:  rgb(45, 232, 219);
}
</style>