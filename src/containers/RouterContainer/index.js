import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from 'containers/HomePage';
import PMenu from 'components/PMenu';

const RouterContainer = () => {
  return (
    <Router>
      <PMenu></PMenu>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterContainer;