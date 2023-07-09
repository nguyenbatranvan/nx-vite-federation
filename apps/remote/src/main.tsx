import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import {MantineWrap} from "@module-fd/mantine-wrap";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
