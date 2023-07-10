// import * as ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import loadable from "@loadable/component";
import {ConfigWrapper, MantineWrap} from "@module-fd/shared/mantine-wrapper";

// (async () => {
//   const res = await fetch("/config.json");
//   const data = await res.json();
//   for (const key in data) {
//     window[key] = data[key]
//   }
//   // window = data.url;
//   const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );
//   const App = loadable(() => import("./app/app"))
//   root.render(
//     <BrowserRouter>
//       <MantineWrap>
//         <App/>
//       </MantineWrap>
//     </BrowserRouter>
//   );
// })()

(async () => {
  const App = loadable(() => import("./app/app"))
  await ConfigWrapper({
    id: 'root',
    children: <BrowserRouter>
      <MantineWrap>
        <App/>
      </MantineWrap>
    </BrowserRouter>
  });
})()
