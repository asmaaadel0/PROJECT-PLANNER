<template>
    <div class="base">
      <slot></slot>
    </div>
  </template>
  <script>
  export default {
  };
  </script>
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    margin: 2rem auto;
    max-width: 30rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: white;
    
  }
  </style>