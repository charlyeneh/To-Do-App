import ToDo from './todo.js';
import addtoList from './addToUI.js';

// Clear completed functionality
const deleteAllCompleted = () => {
  ToDo.list = ToDo.list.filter((item) => item.complete === false);
  ToDo.list.forEach((item, i) => { item.index = i; });
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
  addtoList();
};

export default deleteAllCompleted;