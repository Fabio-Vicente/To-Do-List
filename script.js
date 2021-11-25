const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

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

button.onclick = inputTask;
taskList.onclick = paintTask;
taskList.ondblclick = completeTask;
