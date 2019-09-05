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
import Favicon from "../Screens/Favicon";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/deviceorientation" exact component={DeviceOrientation} />
        <Route path="/favicon" exact component={Favicon} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
