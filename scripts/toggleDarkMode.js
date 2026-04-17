import { main } from "./elements";
import { saveToDB } from "./saveToDB";
import { updateThemeIcon } from "./updateThemeIcon";

export const toggleDarkMode = () => {
  main?.classList.toggle("--isDark");
  const isDark = main?.classList.contains("--isDark");
  saveToDB("isDark", isDark);
  updateThemeIcon(isDark);
};
