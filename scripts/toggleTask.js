import { fetchData } from "./fetchData";
import { renderTasks } from "./renderTasks";
import { saveToDB } from "./saveToDB";

export const toggleTask = (index) => {
  const tasks = fetchData("tasks");
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToDB("tasks", tasks);
  renderTasks(tasks);
};
