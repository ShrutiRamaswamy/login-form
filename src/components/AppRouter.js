import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import Carousal from "./Carousal";

function AppRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Login" component={Login} />
          <Route path="/UserForm" component={UserForm} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Carousal" component={Carousal} />
          </Switch>
          </Router>
  );
}

export default AppRouter;