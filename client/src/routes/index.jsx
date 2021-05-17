import React from "react";
import { Route, Switch } from "react-router";
import Welcome from "../pages/welcome";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
    </Switch>
  );
};

export default Routes;