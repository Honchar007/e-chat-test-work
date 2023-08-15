<template>
  <div class="container">
    <AddToDo />
    <template class="todo-list">
      <ToDoItem
        v-for="todo in todos"
        :checked="todo.done"
        :key="todo.id"
        :todo="todo"
        :label="todo.text"
      />
    </template>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { Actions } from './store/props';

// components
import AddToDo from './components/AddToDo.vue';
import ToDoItem from './components/ToDoItem.vue';

export default {
  name: 'App',
  components: {
    AddToDo,
    ToDoItem,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => store.getters.getTodos);

    onMounted(() => {
      store.dispatch(Actions.getFromLocalStorage);
    });
    return{
      todos,
    };
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
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-top: 2rem;
  gap: 1rem;

  .todo-list {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
}
</style>
