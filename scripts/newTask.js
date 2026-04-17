import { fetchData } from "./fetchData";
import { renderTasks } from "./renderTasks";
import { saveToDB } from "./saveToDB";

export const newTask = (val) => {
  const tasks = fetchData("tasks") || [];

  const task = {
    value: val,
    isCompleted: false,
  };

  tasks.push(task);
  saveToDB("tasks", tasks);
  renderTasks(tasks);
};
