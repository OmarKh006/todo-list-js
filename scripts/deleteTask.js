import { renderEventListeners } from "./eventListeners";
import { fetchData } from "./fetchData";
import { renderTasks } from "./renderTasks";
import { saveToDB } from "./saveToDB";

export const deleteTask = ({ index = undefined, flag = undefined } = {}) => {
  let tasks = fetchData("tasks");

  if (index !== undefined) {
    tasks.splice(index, 1);
  }

  if (flag === "clearCompleted") {
    tasks = tasks.filter((task) => !task.isCompleted);
  }

  saveToDB("tasks", tasks);
  renderTasks(tasks);
  renderEventListeners();
};
