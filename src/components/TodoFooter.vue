<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 15rem;
  height: 50px;
  line-height: 53px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>