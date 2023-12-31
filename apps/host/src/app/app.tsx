import {ErrorBoundary} from "react-error-boundary";
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import {Box, Button} from "@mantine/core";
import loadable from "@loadable/component";
import {useBearStore} from "@module-fd/shared/state";
import {CustomButton} from "@module-fd/shared/custom-components";
import {testUtil} from "@share-core/utils";


const AppHost = loadable(() => import("remoteApp/AppHost"), {
  fallback: <p>...</p>
})
const AppCart = loadable(() => import("remoteCart/AppCart"), {
  fallback: <p>...</p>
})

export function App() {
  const {count, increasePopulation: changeCount} = useBearStore()
  return (<>
      <div role="navigation">
        <h1>Count: {count}</h1>
        <CustomButton onClick={testUtil}>
          Button Host
        </CustomButton>
        <Button onClick={changeCount}>
          Change Count
        </Button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-3">Page 3</Link>
          </li>
          <li>
            <Link to="/hi">App ht</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path={"hi/*"} element={
          <>
            <ErrorBoundary fallback={<p>App Host</p>}>
              <Box sx={{
                margin: 10,
                width: 400,
                padding: 10,
                border: '5px dashed red'
              }}>
                Cart remote
                <br/>
                <AppCart/>
              </Box>
            </ErrorBoundary>
            <ErrorBoundary fallback={<p>App Host</p>}>
              <Box sx={{
                margin: 10,
                width: 400,
                padding: 10,
                border: '5px dashed red'
              }}>
                App Remote
                <AppHost/>
              </Box>
            </ErrorBoundary>
          </>
        }/>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-3">Click here for page 3.</Link>
            </div>
          }
        />
        <Route
          path="/page-3"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
