import { Tasks } from "./elements";

export const renderTasks = (tasks) => {
  let taskList = "";

  tasks.forEach((task) => {
    taskList += `
    <li class="TaskList__taskContent ${task.isCompleted ? "--isCompleted" : ""}">
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
};
