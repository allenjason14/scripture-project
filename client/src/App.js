import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import inQuote from "./pages/inQuote";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/inquote" component={inQuote} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>;

export default App;
