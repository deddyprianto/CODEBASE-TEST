import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Users from "./components/Users";
const App = () => {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/detail">
            <Users />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
