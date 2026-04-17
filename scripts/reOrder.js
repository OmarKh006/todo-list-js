import { Tasks, taskValue } from "./elements";
import { saveToDB } from "./saveToDB";

export const reOrder = () => {
  const tasks = [...Tasks.children].map((li, index) => ({
    value: taskValue()[index].textContent.trim(),
    isCompleted: li.classList.contains("--isCompleted"),
  }));

  saveToDB("tasks", tasks);
};
