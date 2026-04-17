import { toggleThemeIcon } from "./elements";
import { toggleDarkMode } from "./toggleDarkmode";

toggleThemeIcon?.addEventListener("click", () => {
  toggleDarkMode();
});
