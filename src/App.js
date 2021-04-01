import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Investments from "./pages/Investments/Investments";
import HealthCare from "./pages/HealthCare/HealthCare";
import Partners from "./pages/Partners/Partners";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/investments" component={Investments} />
        <Route path="/healthcare" component={HealthCare} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
