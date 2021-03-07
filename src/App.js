import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./App.css"

// Build Router
// Router directs to JS file using URL
// exact={true} will only render when it has exactly same URL
// if exact={true} is not defined then react will render "/" and then "/about" if "/about" is given
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie/:id" exact={true} component={Detail} />
    </HashRouter>
  );
}

export default App;