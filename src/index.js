import './style.css';

class ToDoListClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const task = new ToDoListClass('Coming1', 'false', 1);

const toDoStorage = [];

const enterBTN = document.getElementById('enter');
enterBTN.addEventListener('click', (e) => {
const inputText = document.querySelector('.add-list').value;
toDoStorage.push(inputText);
  console.log(toDoStorage);
});

// toDoStorage.push(task.description);
// console.log(toDoStorage);


// const addToDo = () => {
  // const inputText = document.querySelector('.add-list');
  // console.log(inputText);
  // if (inputText) {
    // const toDo = new ToDoListClass(inputText, false, 1);
    // console.log(toDo.description);
    // toDoStorage.push(toDo.description);
  // }
// };
// addToDo();

// const enterBTN = document.getElementById('enter');
// enterBTN.addEventListener('click', (e) => {
// const inputText = document.querySelector('.add-list').value;
//   console.log(inputText);
// });


// iterates over the array of objects
// const toDoTasks = () => {
//   toDoListArrays.sort((a, b) => a.index - b.index);
//   toDoListArrays.forEach((toDoListArray) => {
//     const div = document.createElement('div');
//     div.classList.add('style-list');
//     const display = document.querySelector('.list-items');
//     div.innerHTML = `<input type="checkbox"> ${toDoListArray.description} <span><i class="fas fa-ellipsis-v"></i></span>`;
//     display.appendChild(div);
//   });
// };
// toDoTasks();

// select input element

// enter event
