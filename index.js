import { toggleThemeIcon } from "./scripts/elements";
import { toggleDarkMode } from "./scripts/toggleDarkmode";

toggleThemeIcon?.addEventListener("click", () => {
  toggleDarkMode();
});
