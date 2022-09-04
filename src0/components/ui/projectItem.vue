<template>
    <div>
        <ul :class="{ compl: project.isComplete }">
            <div class="title" @click="isClickButton">
                <h2>{{  project.id  }}</h2>
            </div>
            <div class="icons">
                <li>
                    <svg @click="delPro(project.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>

                    <svg :class="{ comp: project.isComplete }" @click="comPro(project.id)"
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-check2-square" viewBox="0 0 16 16">
                        <path
                            d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                        <path
                            d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                </li>

            </div>
            <p v-if="isClicked" >{{  project.description  }}</p>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["project"],
    emits: ["del", "edit", "com"],
    data() {
        return {
            isClicked: false,
        }
    },
    methods: {
        delPro(title) {
            this.$emit("del", title);
        },
        editPro(title) {
            this.$emit("edit", title);
        },
        comPro(title) {
            this.$emit("com", title);
        },
        isClickButton() {

            this.isClicked = !this.isClicked;
        }
    }

}
</script>

<style scoped>
p {
    display: block;
}

.comp {
    color: white;
    background: green;
}

.compl {
    border-left: 5px solid green;
}

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

ul {
    list-style: none;
    padding: 25px;
    text-decoration: none;
    margin: 2rem;
    margin-left: 27%;
    background-color: white;
    width: 50%;
    border-left: 5px solid fuchsia;
    display: flex;
}

li {
    font-size: 20px;
    padding: 12px;
    align-items: flex-end;
    transform: translate(20)
}

h2 {
    display: inline;
}


svg {
    padding: 0px;
    margin-left: 3rem;
    color: gray;
}

svg:hover {
    color: black;
}

.title {
    padding: 10px;
    text-align: left;
    display: inline;
}

.icons {
    /* position: fixed; */
    align-items: flex-end;
}
</style>
  