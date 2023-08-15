import { createStore } from 'vuex'

// module types
import { Actions, Mutations } from './props';

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    getTodos: (state) => state.todos,
    getNextIndex: (state) => state.todos.length > 0 ? state.todos.length : 0,
  },
  mutations: {
    [Mutations.setTodos](state, todos) {
      state.todos = todos;
    },
    [Mutations.addTodo](state,  todo) {
      state.todos = [...state.todos, todo];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    [Mutations.editTodo](state, editedTodo) {
      const todoTmp = state.todos.find((todo) => todo.id === editedTodo.id);
      if (todoTmp) {
        todoTmp.text = editedTodo.text;
        todoTmp.done = editedTodo.done;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    [Mutations.removeTodo](state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
  actions: {
    async [Actions.addTodo]({ commit }, todo) {
      console.log('add',todo);
      await commit(Mutations.addTodo, todo);
    },
    async [Actions.removeTodo]({ commit }, todoId) {
      await commit(Mutations.removeTodo, todoId);
    },
    async [Actions.editTodo]({ commit }, editedTodo) {
      await commit(Mutations.editTodo, editedTodo);
    },
    async [Actions.getFromLocalStorage]({ commit }, ) {
      const todosData = localStorage.getItem('todos');
      if (todosData != null) {
        await commit(Mutations.setTodos, JSON.parse(todosData));
      }
    }
  },
  modules: {
  }
})
