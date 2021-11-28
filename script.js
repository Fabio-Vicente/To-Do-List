const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const clearDoneButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const movedownButton = document.getElementById('mover-baixo');
const removeTaskButton = document.getElementById('remover-selecionado');

function clearInput() {
  input.value = '';
}
function inputTask() {
  const li = document.createElement('li');
  li.innerText = input.value;
  taskList.appendChild(li);
  clearInput();
}
function unselectedTask() {
  const beforeSelected = document.querySelector('.selected');
  if (beforeSelected !== null) {
    beforeSelected.classList.remove('selected');
  }
}
function paintTask(select) {
  const task = select.target;
  if (select !== taskList) {
    unselectedTask();
    task.classList.add('selected');
  }
}
function completeTask(check) {
  if (check !== taskList) {
    const task = check.target;
    if (task.classList.contains('completed')) {
      task.classList.remove('completed');
    } else {
      task.classList.add('completed');
    }
  }
}
function moveTaskUp() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected === null) {
    return;
  }
  const upperTask = taskSelected.previousElementSibling;
  if (upperTask !== null) {
    const swapName = upperTask.innerText;
    const swapState = upperTask.className;
    upperTask.innerText = taskSelected.innerText;
    upperTask.className = taskSelected.className;
    taskSelected.innerText = swapName;
    taskSelected.className = swapState;
  }
}
function moveTaskDown() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected === null) {
    return;
  }
  const underTask = taskSelected.nextElementSibling;
  if (underTask !== null) {
    const swapName = underTask.innerText;
    const swapState = underTask.className;
    underTask.innerText = taskSelected.innerText;
    underTask.className = taskSelected.className;
    taskSelected.innerText = swapName;
    taskSelected.className = swapState;
  }
}
function clearTask() {
  for (; taskList.children.length !== 0;) {
    taskList.removeChild(taskList.children[0]);
  }
}
function clearCompletedTasks() {
  const completedList = document.getElementsByClassName('completed');
  for (; completedList.length !== 0;) {
    taskList.removeChild(completedList[0]);
  }
}
function saveTasks() {
  const tasks = [];
  for (let i = 0; i < taskList.children.length; i += 1) {
    const task = {
      text: '',
      state: null,
    };
    task.text = taskList.children[i].innerText;
    task.state = taskList.children[i].className;
    tasks.push(task);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function listSavedTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks !== null) {
    for (let i = 0; i < savedTasks.length; i += 1) {
      const task = document.createElement('li');
      task.innerText = savedTasks[i].text;
      task.className = savedTasks[i].state;
      taskList.appendChild(task);
    }
  }
}
function removeTask() {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected !== null) {
    taskList.removeChild(taskSelected);
  }
}

window.onload = listSavedTasks;
button.onclick = inputTask;
taskList.onclick = paintTask;
taskList.ondblclick = completeTask;
moveUpButton.onclick = moveTaskUp;
movedownButton.onclick = moveTaskDown;
clearButton.onclick = clearTask;
clearDoneButton.onclick = clearCompletedTasks;
saveTasksButton.onclick = saveTasks;
removeTaskButton.onclick = removeTask;
