export const toggleThemeIcon = document.querySelector(".themeIcon");
export const main = document.querySelector(".main");
export const Tasks = document.querySelector(".TaskList__list");
export const inputField = document.querySelector(".TaskInput__input");
export const addTaskButton = document.querySelector(".TaskInput__button");
export const buttons = document.querySelectorAll(".button");
export const notCompletedNumber = document.querySelector(".notCompletedValue");

export const getDeleteButtons = () =>
  document.querySelectorAll(".TaskList__deleteIcon");

export const getCheckboxes = () =>
  document.querySelectorAll(".TaskList__checkbox");

export const taskValue = () => document.querySelectorAll(".TaskList__value");
