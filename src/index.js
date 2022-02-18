import ToDo from './modules/todo.js';
import addtoList from './modules/addToUI.js';
import add from './modules/add.js';
import './style.css';

// On Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
}

// Add input event on todo
const addInput = document.getElementById('add-input');
addInput.addEventListener('keydown', add);

addtoList();
