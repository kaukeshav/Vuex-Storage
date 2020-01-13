import axios from "axios";

const state = {
  todoList: [
    {
      id: 1,
      title: "Todo 1"
    },
    {
      id: 2,
      title: "Todo 2"
    },
    {
      id: 3,
      title: "Todo 3"
    },
    {
      id: 4,
      title: "Todo 4"
    }
  ]
};
const mutations = {
  setTodoList: (state, todoList) => {
    state.todoList = todoList;
  },
  updateNewTodo: (state, newTodo) => {
    state.todoList.unshift(newTodo);
  },
  deleteTodoIndex: (state, id) => {
    state.todoList = state.todoList.filter(todo => {
      return todo.id !== id;
    });
  },
  updateTheTodo: (state, updatedTodo) => {
    const index = state.todoList.findIndex(
      eachTodo => eachTodo.id === updatedTodo.id
    );
    if (index !== -1) {
      state.todoList.splice(index, 1, updatedTodo);
    }
  }
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodoList", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );
    commit("updateNewTodo", response.data);
    console.log("response", response.data);
  },
  async deleteTodo({ commit }, todoId) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    commit("deleteTodoIndex", todoId);
  },
  async filterTodos({ commit }, filterCount) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${filterCount}`
    );
    console.log(response.data);
    commit("setTodoList", response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`
    );
    commit("updateTheTodo", updatedTodo);
  }
};
const getters = {
  getTodos: state => {
    return state.todoList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
