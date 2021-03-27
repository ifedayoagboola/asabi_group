import React from "react";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
