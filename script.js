const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const clearDoneButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById('salvar-tarefas');

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

window.onload = listSavedTasks;
button.onclick = inputTask;
taskList.onclick = paintTask;
taskList.ondblclick = completeTask;
clearButton.onclick = clearTask;
clearDoneButton.onclick = clearCompletedTasks;
saveTasksButton.onclick = saveTasks;
