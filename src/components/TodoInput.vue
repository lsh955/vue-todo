<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBts fas fa-times" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">내용이 없습니다. 내용을 입력하세요!</h3>
      <h3 slot="footer">
        창을 닫을려면 확인 버튼을 누르세요!
        <button class="modal-default-button" @click="$emit('close')">
          확인
        </button>
      </h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "./commom/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // Modal: Modal

    // 속성명의 축약
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  margin-bottom: 35px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBts {
  color: #42b983;
}
</style>
