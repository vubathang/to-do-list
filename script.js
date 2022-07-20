'use strict'
const inp_text = document.querySelector('.input-task')
const addBtn = document.getElementById('add-task')
const editBtn = document.querySelector('.edit-text')
const list_task = document.querySelector('ul')
let myEdit = null;

addBtn.addEventListener('click', function() {
  let text = inp_text.value
  if (!text) {
    alert('Fill out your task')
  }
  else {
    list_task.innerHTML += `
      <li  >
        <div class="text-task" onclick="completeTask(this)">${text}</div>
        <div class="action">
          <a type="button" class="edit" onclick="editText(this)">Edit</a>
          <a type="button" class="delete" onclick="myFunctionDelete(this)">Delete</a>
        </div>
      </li>
    `
    inp_text.value = ''
  }
});

// Delete task
function myFunctionDelete(this_) {
  this_.parentElement.parentElement.remove()
}

const btn_add = function(){
  addBtn.classList.remove('hidden')
  editBtn.classList.add('hidden')
}

const btn_save = function(){
  addBtn.classList.add('hidden')
  editBtn.classList.remove('hidden')
}

function editText(this_) {
  const text_elem = this_.parentElement.parentElement.querySelector('.text-task')
  let text = text_elem.textContent
  console.log(text_elem);
  inp_text.value = text;
  btn_save();
  myEdit = this_;
}

editBtn.addEventListener('click', function() {
  let text_current = inp_text.value;
  const myText = myEdit.parentElement.parentElement.querySelector('.text-task')
  myText.innerHTML = text_current;
  inp_text.value = ''
  btn_add()
})

function completeTask(task) {
  const text_elem = task.parentElement
  const myTask = task
  const taskComplete = myTask.style.textDecoration =='line-through'
  if (!taskComplete && task) {
    myTask.style.textDecoration = 'line-through'
    text_elem.style.background = 'green'
    // text_elem.textContent = `✅ ${text_elem.textContent}`
  }
  else {
    myTask.style.textDecoration = 'none'
    text_elem.style.background = '#B7E5DD'
    // text_elem.textContent = text_elem.textContent.substring(1);
  }

}




