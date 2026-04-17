# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all / active / completed todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/OmarKh006/todo-list-js)
- Live Site URL: [Add live site URL here](https://omarkh006.github.io/todo-list-js/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS (with CSS custom properties and nesting)
- Flexbox
- Mobile-first responsive design
- Vanilla JavaScript (ES Modules)
- [SortableJS](https://sortablejs.github.io/Sortable/) — for drag-and-drop reordering
- `localStorage` — for data persistence across sessions
- [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) — Google Fonts

### What I learned

**Modular JavaScript with ES Modules** — I split the app logic into small, single-responsibility modules (e.g. `newTask.js`, `deleteTask.js`, `toggleTask.js`, `renderTasks.js`) and used `import`/`export` to wire them together. This kept the codebase clean and easy to reason about.

**localStorage for persistence** — Tasks and the selected theme are saved to `localStorage` so they survive page refreshes. I abstracted this into two small helpers:

```js
export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};
```

**Drag-and-drop reordering with SortableJS** — After a drag ends, I read the new DOM order and sync it back to `localStorage`:

```js
export const reOrder = () => {
  const tasks = [...Tasks.children].map((li, index) => ({
    value: taskValue()[index].textContent.trim(),
    isCompleted: li.classList.contains("--isCompleted"),
  }));
  saveToDB("tasks", tasks);
};
```

**Dark mode with CSS custom properties** — Toggling a `--isDark` class on the `.main` element combined with `:has()` on the container was enough to swap the full colour scheme and background image without any JavaScript style manipulation:

```css
.container:has(.main.--isDark) {
  background-color: var(--bg-color-dark);
  background-image: url("./assets/bg-desktop-dark.jpg");
}
```

**SCSS nesting** — Using SCSS's BEM-friendly nesting kept the stylesheet organised and easy to maintain, especially for the many modifier states (`--isCompleted`, `--isDark`, `--isActive`).

### Continued development

- Migrate the project to a bundler (Vite or Webpack) so SCSS is compiled properly and ES Modules are bundled for production
- Add keyboard accessibility for the drag-and-drop functionality
- Explore using `IndexedDB` instead of `localStorage` for a more robust storage solution
- Add transition animations when tasks are added, removed, or filtered

## Author

- Frontend Mentor - [@OmarKh006](https://www.frontendmentor.io/profile/OmarKh006)
