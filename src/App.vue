<template>
  <div class="container">
    <AddToDo />
    <ToDoItem />
  </div>
</template>

<script>
import AddToDo from './components/AddToDo.vue';
import ToDoItem from './components/ToDoItem.vue';

export default {
  name: 'App',
  components: {
    AddToDo,
    ToDoItem,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
