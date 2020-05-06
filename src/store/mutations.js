// state를 변경시키는 역활(Mutations을 통해서만 state를 변경해야 한다.)
// Mutitions내에 있는 함수의 인자는 state와 payload
// 기본 인자는 state 사용 commit으로 넘어온 전달 인자는 payload 사용
// payload는 여러개를 묶은 객체 형태로 전달 될 수 있다.
const addOneItem = (state, todoItem) => { 
     const obj = { completed: false, item: todoItem };
     localStorage.setItem(todoItem, JSON.stringify(obj));
     state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
     localStorage.removeItem(payload.todoItem.item);
     state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
     // 로컬 스토리지의 데이터를 갱신
     localStorage.removeItem(payload.todoItem.item);
     localStorage.setItem(
          payload.todoItem.item,
          JSON.stringify(payload.todoItem)
     );
}

const clearAllItems = (state) => {
     localStorage.clear();
     state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }