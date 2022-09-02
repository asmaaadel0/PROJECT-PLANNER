<template>
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
                    details: "Some details about create homepage banner."
                },
                {
                    id: "Make marketing email",
                    isComplete: true,
                    isGoing: false,
                    details: "Some details about make marketing email."
                },
                {
                    id: "Update promo links",
                    isComplete: false,
                    isGoing: false,
                    details: "Some details update promo links."
                }],
            completedTitles: [{
                id: "Make marketing email",
                isComplete: true,
                isGoing: false,
            },],
            isGoingTitle: [
                {
                    id: "Create homepage banner",
                    isComplete: false,
                    isGoing: false,
                },
                {
                    id: "Update promo links",
                    isComplete: false,
                    isGoing: false,
                }
            ]
        }
    },
    methods: {
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

    }
}
</script>

<style>
</style>