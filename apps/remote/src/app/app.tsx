// import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import {Button} from "@mantine/core";
import React from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {MantineWrap} from "@module-fd/shared/mantine-wrapper";
import {useCounter} from "remoteShared/Hooks";
import {CustomButton} from "@module-fd/shared/custom-components";
import {useBearStore} from "shared-state";

export function AppHost() {
  const {bears, increasePopulation} = useCounter();
  const {count} = useBearStore()

  return (
    <MantineWrap>
      {/*<NxWelcome title="remote"/>*/}
      <h1>Remote app , bears is {bears}</h1>
      <h1>
        Remote app, count is {count}
      </h1>
      <Button onClick={increasePopulation}>
        Set Counter Remote
      </Button>
      <CustomButton>
        my custom button
      </CustomButton>

      <BrowserRouter>
        <img width={100} alt={"image test"} src={"/img.png"}/>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path={""} element={<Navigate to={"/page-2"}/>}>

          </Route>
          {/*<Route*/}
          {/*  path="/"*/}
          {/*  element={*/}
          {/*    <div>*/}
          {/*      This is the generated root route.{' '}*/}
          {/*      <Link to="page-2">Click here for page 2.</Link>*/}
          {/*    </div>*/}
          {/*  }*/}
          {/*/>*/}
          <Route
            path="page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {/*</BrowserRouter>*/}
      {/* END: routes */}
    </MantineWrap>
  );
}

export default AppHost;
