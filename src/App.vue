<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // TodoHeader: TodoHeader,

    // ES6 속성명의 축약
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  font-family: "NanumGothicRegular", "NotoSansRegular", "Malgun Gothic",
    "맑은 고딕", "Apple SD Gothic Neo", "Dotum", "Gulim", "Arial", sans-serif;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 75%;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
