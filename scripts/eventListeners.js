import { deleteTask } from "./deleteTask";
import {
  addTaskButton,
  buttons,
  getCheckboxes,
  getDeleteButtons,
  inputField,
  toggleThemeIcon,
} from "./elements";
import { fetchData } from "./fetchData";
import { newTask } from "./newTask";
import { renderActiveTasks } from "./renderActiveTasks";
import { renderCompletedTasks } from "./renderCompletedTasks";
import { renderTasks } from "./renderTasks";
import { toggleDarkMode } from "./toggleDarkmode";
import { toggleTask } from "./toggleTask";

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
  inputField.value = "";
});

export const renderEventListeners = () => {
  getCheckboxes().forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
      toggleTask(index);
      e.currentTarget.parentElement.classList.toggle("--isCompleted");
    });
  });

  getDeleteButtons().forEach((button, index) => {
    button.addEventListener("click", () => {
      deleteTask({ index });
    });
  });
};

buttons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((b) => b.classList.remove("--isActive"));

    e.currentTarget.classList.add("--isActive");

    const filter = e.currentTarget.dataset.filter;
    const tasks = fetchData("tasks") || [];

    if (filter === "all") {
      renderTasks(tasks);
    } else if (filter === "active") {
      renderActiveTasks(tasks);
    } else if (filter === "completed") {
      renderCompletedTasks(tasks);
    } else if (filter === "clear") {
      deleteTask({ flag: "clearCompleted" });
    }
  });
});
