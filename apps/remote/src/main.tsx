// import * as ReactDOM from 'react-dom/client';

// import App from './app/app';
import loadable from "@loadable/component";
import {ConfigWrapper} from "@module-fd/shared/mantine-wrapper";
// import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <App />
// );

(async () => {
  const App = loadable(() => import("./app/app"))
  await ConfigWrapper({
    id: 'root',
    children: <App/>
  });
})()
