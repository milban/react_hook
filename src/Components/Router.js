import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "../Screens/Home";
import DeviceOrientation from "../Screens/DeviceOrientation";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/DeviceOrientation" exact component={DeviceOrientation} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
