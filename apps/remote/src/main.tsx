import loadable from "@loadable/component";
import {ConfigWrapper} from "@module-fd/shared/mantine-wrapper";

(async () => {
  const App = loadable(() => import("./app/app"))
  await ConfigWrapper({
    id: 'root',
    children: <App/>
  });
})()
