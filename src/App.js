import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Router path="/" exact={true} component={Home} />
          <Router path="/staff" exact={true} component={Staff} />
          <h1>Hello</h1>
        </div>
      </Router>
    );
  }
}

export default App;
