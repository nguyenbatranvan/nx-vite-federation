import {BrowserRouter} from "react-router-dom";
import loadable from "@loadable/component";
import {ConfigWrapper, MantineWrap} from "@module-fd/shared/mantine-wrapper";

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
console.log('i',import.meta)
if (import.meta.hot) {
  console.log('29293933')
  import.meta.hot.on('beforeUpdate',()=>{
console.log('399434')
  })
}
