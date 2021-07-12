import React from "react";
import Header from './components/Header';
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import MovieDetails from "./container/MovieDetails";

import "./App.css";
function Routes() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/movieApp" exact component={Home} />
        <Route path="/movie/:id" exact component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default Routes;
