import { addTaskButton, inputField, toggleThemeIcon } from "./elements";
import { newTask } from "./newTask";
import { toggleDarkMode } from "./toggleDarkmode";

toggleThemeIcon?.addEventListener("click", () => {
  toggleDarkMode();
});

addTaskButton?.addEventListener("click", (e) => {
  e.preventDefault();
  const taskValue = inputField.value;
  if (taskValue.trim()) {
    newTask(taskValue);
  } else {
    alert("Please Enter a task!");
  }
});
