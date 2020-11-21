import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { FirstPage } from "./containers/FirstPage";
import { SecondPage } from "./containers/SecondPage";

function App() {
  return (
    <div>
      <div className="coin-app">
        <Switch>
          <Redirect exact from="/" to="/firstpage" />
          <Route exact path="/firstpage" component={FirstPage} />
          <Route exact path="/secondpage" component={SecondPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
