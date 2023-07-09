import NxWelcome from "../../../remote/src/app/nx-welcome";
import {Route, Routes} from "react-router-dom";

export const TestRouter = () => {
  return <>
    <NxWelcome title="remote"/>

    START: routes
    These routes and navigation have been generated for you
    Feel free to move and update them to fit your needs
    <br/>
    <hr/>
    <br/>
    {/*<BrowserRouter>*/}
    {/*  <div role="navigation">*/}
    {/*    <ul>*/}
    {/*      <li>*/}
    {/*        <Link to="/">Home</Link>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <Link to="/page-2">Page 2</Link>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </div>*/}

    {/*<BrowserRouter>*/}
    <Routes>

      <Route>
        <Route path={""} element={<p>cccc</p>}/>
      </Route>
      {/*<Route*/}
      {/*  path="/page-2"*/}
      {/*  element={*/}
      {/*    <div>*/}
      {/*      <Link to="/">Click here to go back to root page.</Link>*/}
      {/*    </div>*/}
      {/*  }*/}
      {/*/>*/}
    </Routes>
  </>
}
