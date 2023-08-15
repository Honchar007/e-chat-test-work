import { createStore } from 'vuex'

// module types
import { Actions, Mutations } from './props';

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    getTodos: (state) => state.todos,
  },
  mutations: {
    [Mutations.setTodos](state, todos) {
      state.todos = todos;
    },
    [Mutations.addTodo](state,  todo) {
      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.tasks));
    },
    [Mutations.editTodo](state, editedTodo) {
      const todoTmp = state.todos.find((todo) => todo.id === editedTodo.id);
      if (todoTmp) {
        todoTmp.name = editedTodo.name;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    [Mutations.removeTodo](state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
  actions: {
    [Actions.addTodo]({ commit }, todo) {
      commit([Mutations.addTodo], todo);
    },
    [Actions.removeTodo]({ commit }, todoId) {
      commit([Mutations.removeTodo], todoId);
    },
    [Actions.editTodo]({ commit }, editedTodo) {
      commit([Mutations.editTodo], editedTodo);
    },
    [Actions.getFromLocalStorageUser]({ commit }, ) {
      const todosData = localStorage.getItem('todos');
      if (todosData != null) {
        commit([Mutations.setTodos], JSON.parse(todosData));
      }
    }
  },
  modules: {
  }
})
