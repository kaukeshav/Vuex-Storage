<template>
  <div>
    <h1>Todos List:</h1>
    <ul
      style="display: flex; padding: 40px; flex-wrap: wrap; list-style-type: none;"
    >
      <li
        :style="{
          background: todo.completed ? '#f2f2f2' : 'transparent',
          cursor: 'pointer',
          flex: 1,
          padding: '10px',
          'min-width': '30%',
          margin: '10px',
          border: '1px solid'
        }"
        @dblclick="updateTodos(todo)"
        v-for="todo in getTodos"
        :key="todo.id"
      >
        {{ todo.title }}
        <button @click="deleteTodos(todo)">
          Delete this todo
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    deleteTodos(todo) {
      this.deleteTodo(todo.id);
    },
    updateTodos(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updatedTodo);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style></style>
