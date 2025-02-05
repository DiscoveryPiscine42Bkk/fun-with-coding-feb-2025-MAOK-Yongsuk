const saveTasks = () => {
  let tasks = [];
  $("#ft_list div").each(function () {
    tasks = [$(this).text(), ...tasks];
  });
  document.cookie = `tasks=${JSON.stringify(tasks)}`;
};

const addTask = (text, save = true) => {
  const taskDiv = $("<div>").text(text);
  taskDiv.on("click", () => {
    if (confirm("Do you want to remove this task?")) {
      taskDiv.remove();
      saveTasks();
    }
  });
  $("#ft_list").prepend(taskDiv);
  if (save) saveTasks();
};

const newTask = () => {
  const task = prompt("Enter a new TO DO:");
  if (task) addTask(task);
};

$(document).ready(() => {
  const [_key, saveTasks] = document.cookie.split("=");
  if (saveTasks) {
    const tasks = JSON.parse(saveTasks);
    tasks.map((task) => addTask(task, false));
  }
});
