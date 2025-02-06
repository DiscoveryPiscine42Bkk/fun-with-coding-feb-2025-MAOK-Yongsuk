const persistToDoList = () => {
  let todoItems = [];
  document
    .querySelectorAll("#ft_list div")
    .forEach((element) => (todoItems = [element.textContent, ...todoItems]));
  document.cookie = `todoItems=${JSON.stringify(todoItems)}`;
};

const createTodoItem = (content, shouldSave = true) => {
  const todoElement = document.createElement("div");
  todoElement.textContent = content;
  todoElement.addEventListener("click", () => {
    if (confirm("Do you want to remove this task?")) {
      todoElement.remove();
      persistToDoList();
    }
  });
  const todoContainer = document.getElementById("ft_list");
  todoContainer.prepend(todoElement);
  if (shouldSave) persistToDoList();
};

const createNewTodoItem = () => {
  const userInput = prompt("Enter a new TO DO:");
  if (userInput) createTodoItem(userInput);
};

document.addEventListener("DOMContentLoaded", () => {
  const [_cookieKey, savedTodoItems] = document.cookie.split("=");
  if (savedTodoItems) {
    const todoItems = JSON.parse(savedTodoItems);
    todoItems.map((item) => createTodoItem(item, false));
  }
});