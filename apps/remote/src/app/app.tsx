// import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import {Button} from "@mantine/core";
import {MantineWrap} from "../../../../libs/mantine-wrap/src/index";
import React from "react";

export function AppHost() {
  return (
    <MantineWrap>
      {/*<NxWelcome title="remote"/>*/}
      <h1>Remote app</h1>
      <Button>
        Remote btn
      </Button>

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
      {/*  <Routes>*/}
      {/*    <Route*/}
      {/*      path="/"*/}
      {/*      element={*/}
      {/*        <div>*/}
      {/*          This is the generated root route.{' '}*/}
      {/*          <Link to="/page-2">Click here for page 2.</Link>*/}
      {/*        </div>*/}
      {/*      }*/}
      {/*    />*/}
      {/*    <Route*/}
      {/*      path="/page-2"*/}
      {/*      element={*/}
      {/*        <div>*/}
      {/*          <Link to="/">Click here to go back to root page.</Link>*/}
      {/*        </div>*/}
      {/*      }*/}
      {/*    />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
      {/*</BrowserRouter>*/}
      {/* END: routes */}
    </MantineWrap>
  );
}

export default AppHost;
