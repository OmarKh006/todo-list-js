import Sortable from "sortablejs";
import { main, Tasks } from "./elements";
import { fetchData } from "./fetchData";
import { renderTasks } from "./renderTasks";
import { updateThemeIcon } from "./updateThemeIcon";
import { reOrder } from "./reOrder";

export const onStartup = () => {
  const savedTheme = fetchData("isDark");

  if (savedTheme) {
    main?.classList.add("--isDark");
  }

  updateThemeIcon(savedTheme ?? false);
  renderTasks(fetchData("tasks") || []);
};

export const orderList = () => {
  new Sortable(Tasks, {
    animation: 150,

    onEnd() {
      reOrder();
    },
  });
};
