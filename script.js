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
function paintTask(select) {
  if (select !== taskList) {
    select.target.classList.add('selected');
  }
}

button.onclick = inputTask;
taskList.onclick = paintTask;
