<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoFooter></TodoFooter>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader: TodoHeader,
    TodoList: TodoList,
    TodoInput: TodoInput,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
</style>