import * as ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import loadable from "@loadable/component";
import {MantineWrap} from "@module-fd/shared/mantine-wrapper";

(async () => {
  const res = await fetch("/config.json");
  const data = await res.json();
  window['remoteURL'] = data.url;
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  const App = loadable(() => import("./app/app"))
  root.render(
    <BrowserRouter>
      <MantineWrap>
        <App/>
      </MantineWrap>
    </BrowserRouter>
  );
})()

