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
  if (select !== taskList) {
    unselectedTask();
    select.target.classList.add('selected');
  }
}

button.onclick = inputTask;
taskList.onclick = paintTask;
