<template>
  <nav>
    <router-link :to="{ name: 'TheProjects' }" >Projects</router-link> |
    <router-link :to="{ name: 'AddProject' }">Add a New Project</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  background: rgb(238, 238, 238);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 20px;
  font-weight: bold;
  color: rgb(143, 142, 142);
  background: rgb(238, 238, 238);
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  border-bottom: 4px solid rgb(41, 215, 204);
  color: black;
}
</style>
