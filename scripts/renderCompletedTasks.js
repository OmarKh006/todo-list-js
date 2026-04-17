import { Tasks } from "./elements";
import { renderEventListeners } from "./eventListeners";

export const renderCompletedTasks = (tasks) => {
  let taskList = "";
  const activeTasks = tasks.filter((task) => task.isCompleted);

  activeTasks.forEach((task) => {
    taskList += `
    <li class="TaskList__taskContent --isCompleted doneTask">
        <div class="TaskList__checkbox" tabindex="0" role="button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="9"
                class="TaskList__checkboxImg"
            >
                <path
                fill="none"
                stroke="#FFF"
                stroke-width="2"
                d="M1 4.304L3.696 7l6-6"
                />
            </svg>
        </div>
        <p class="TaskList__value">${task.value}</p>
        <div class="TaskList__taskDelete">
            <img
                width="14px"
                height="14px"
                class="TaskList__deleteIcon"
                src="./assets/icon-cross.svg"
                alt="x icon"
            />
        </div>
    </li>
    `;
  });

  Tasks.innerHTML = taskList;
  renderEventListeners();
};
