import {ErrorBoundary} from "react-error-boundary";
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import {Box, Button} from "@mantine/core";
import loadable from "@loadable/component";
import {useCounter} from "remoteShared/Hooks";

const AppHost = loadable(() => import("remoteApp/AppHost").catch(), {
  fallback: <p>...</p>
})

export function App() {
  const {bears,increasePopulation}=useCounter();
  return (<>
      <div role="navigation">
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
      <Button onClick={increasePopulation}>
        Button Host {bears}
      </Button>

      <Routes>
        <Route path={"hi/*"} element={
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
