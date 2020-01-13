<template>
  <div>
    Add Todo
    <form>
      <input type="text" name="" id="" v-model="title" />
      <input type="submit" value="submit" @click.prevent="addNewTodo" />
      <p>{{ title }}</p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addNewTodo() {
      // do nothing
      this.addTodo(this.title);
    }
  }
};
</script>

<style></style>
