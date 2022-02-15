import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const LandingPage = React.lazy(() => import("../pages/LandingPage"));

export function AppRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
