<template>
      <form @submit.prevent="submitForm">
        <label for="title">Title</label>
        <input type="title" name="title" id="title" v-model="title">

        <label for="description">Description:</label>
        <textarea name="description" id="description" v-model="description" rows="5"></textarea>
        <div v-if="error" class="error">{{  error  }}</div>
        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>

</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            error: '',
        }
    },
    methods: {
        submitForm() {
            this.error = (this.title && this.description) ? '' : 'Please enter Title and Description'
            if (this.error) {
                return;
            }
            this.$emit("add", this.title, this.description);
        }
    }

}
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    
    input,
    textarea {
        display: block;
        padding: 10px 6px;
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    
    button {
        background-color: rgb(41, 215, 204);
        border: 0;
        padding: 10px 15px;
        margin-top: 10px;
        color: white;
        border-radius: 30px;
        font-size: 15px;
    }
    
    button:hover {
        background: rgb(45, 232, 219);
    }
    
    .submit {
        text-align: center;
        margin-top: 30px;
    }
    
    .error {
        color: red;
        margin-top: 30px;
        font-size: 1rem;
        font-weight: bold;
    }
    </style>