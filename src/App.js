import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Info from "./components/Info";
import Interview from "./components/Interview";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/interview" component={Interview} />
        <Route path="/" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
