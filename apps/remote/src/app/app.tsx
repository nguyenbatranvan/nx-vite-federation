// import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import {Button} from "@mantine/core";
import React, {useEffect} from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {MantineWrap, useCounter} from "@module-fd/shared/mantine-wrapper";

export function AppHost() {
  const {bears, increasePopulation,reset} = useCounter();
  useEffect(()=>{
    return ()=>{
      console.log('desstroy')
      reset();
    }
  },[])
  return (
    <MantineWrap>
      {/*<NxWelcome title="remote"/>*/}
      <h1>Remote app, bears is {bears}</h1>
      <Button onClick={increasePopulation}>
        Set Counter Remote
      </Button>

      <BrowserRouter>
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
