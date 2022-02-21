import ToDo from './todo.js';
// Add items to UI
const addtoList = () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input class="checkbox" type="checkbox">
    <input type="text" class="input" value='${item.description}'>
    
    <button class="cancel-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
    `;

    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('.input');
    const textInput = listItem.querySelector('p');
    const deleteButton = listItem.querySelector('button');

    // Update
    checkbox.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].update();
      text.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
    });

    text.addEventListener('input', (e) => {
      text.value = e.target.value;
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].description = e.target.value;
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
      if (e.key === 'Enter') {
        text.style.display = 'block';
        textInput.classList.toggle('edit-item');
      }
    });

    // Delete functionality
    deleteButton.addEventListener('click', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list = ToDo.list.filter((item) => item !== ToDo.list[index]);
      ToDo.list.forEach((item, i) => { item.index = i; });
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
      addtoList();
    });

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
};

export default addtoList;