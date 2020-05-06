import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters"
import * as mutations from "./mutations"

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {      // 프로젝트에서 공통으로 사용할 변수를 정의(여러 컴포넌트에 공유되는 데이터)
    todoItems: storage.fetch(),
  },
  getters,
  mutations
});
