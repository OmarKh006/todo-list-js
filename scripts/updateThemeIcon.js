import { toggleThemeIcon } from "./elements";

export const updateThemeIcon = (isDark) => {
  toggleThemeIcon.src = isDark
    ? "./assets/icon-sun.svg"
    : "./assets/icon-moon.svg";
};
