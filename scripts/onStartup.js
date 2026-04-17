import { main } from "./elements";
import { fetchData } from "./fetchData";
import { renderTasks } from "./renderTasks";
import { updateThemeIcon } from "./updateThemeIcon";

export const onStartup = () => {
  const savedTheme = fetchData("isDark");

  if (savedTheme) {
    main?.classList.add("--isDark");
  }

  updateThemeIcon(savedTheme ?? false);
  renderTasks(fetchData("tasks") || []);
};
