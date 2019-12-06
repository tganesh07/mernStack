import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/">
            {" "}
            {/* Keyword exact looks for exact address specified on the path */}
            <Users />
          </Route>
          <Route exact path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route exact path="/places/new">
            <NewPlaces />
          </Route>

          {/* if users search does not match any address then redirect the user to home page, "/" */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
