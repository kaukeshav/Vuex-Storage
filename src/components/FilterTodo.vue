<template>
  <div>
    <select v-model="selectedTodo" @change="filterTodo($event)">
      <option v-for="(option, index) in opts" :value="option" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodo",
  data() {
    return {
      selectedTodo: 200,
      opts: [200, 100, 50, 20, 10, 5]
    };
  },
  methods: {
    ...mapActions(["filterTodos"]),
    filterTodo(event) {
      if (event) {
        this.filterTodos(this.selectedTodo);
      }
    }
  }
};
</script>

<style></style>
