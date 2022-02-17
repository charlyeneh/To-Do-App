import _ from 'lodash';
import './style.css';

// Array of some simple tasks
const toDoListArrays = [
  {
    description: 'Wake up time and breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Morning session',
    completed: false,
    index: 2,
  },
  {
    description: 'Lunch break',
    completed: false,
    index: 3,
  },
  {
    description: 'Standup meeting',
    completed: false,
    index: 4,
  },
];

// iterates over the array of objects 
const toDoTasks = () => {
  toDoListArrays.sort((a, b) => a.index - b.index);
  toDoListArrays.forEach((toDoListArray) => {
    const div = document.createElement('div');
    div.classList.add('style-list');
    const display = document.querySelector('.list-items')
    div.innerHTML = `<input type="checkbox"> ${toDoListArray.description} <span><i class="fas fa-ellipsis-v"></i></span>`
    display.appendChild(div);
  })
}
toDoTasks();
