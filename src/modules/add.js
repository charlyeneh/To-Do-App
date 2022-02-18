import addtoList from './addToUI.js';
import ToDo from './todo.js';

function add(e) {
  if (e.code === 'Enter') {
    const newItem = new ToDo(this.value, false);
    localStorage.setItem('todoList', JSON.stringify(newItem.getList()));
    this.value = '';
    addtoList();
  }
}

export default add;
