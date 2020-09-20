import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';
import PMenu from 'components/PMenu';

const RouterContainer = () => {
  return (
    <Router>
      <PMenu></PMenu>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterContainer;