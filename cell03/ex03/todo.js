const saveTasks = () => {
  let tasks = [];
  document
    .querySelectorAll("#ft_list div")
    .forEach((div) => (tasks = [div.textContent, ...tasks]));
  document.cookie = `tasks=${JSON.stringify(tasks)}`;
};

const addTask = (text, save = true) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = text;
  taskDiv.addEventListener("click", () => {
    if (confirm("Do you want to remove this task?")) {
      taskDiv.remove();
      saveTasks();
    }
  });
  const ftList = document.getElementById("ft_list");
  ftList.prepend(taskDiv);
  if (save) saveTasks();
};

const newTask = () => {
  const task = prompt("Enter a new TO DO:");
  if (task) addTask(task);
};

document.addEventListener("DOMContentLoaded", () => {
  const [_key, saveTasks] = document.cookie.split("=");
  if (saveTasks) {
    const tasks = JSON.parse(saveTasks);
    tasks.map((task) => addTask(task, false));
  }
});
