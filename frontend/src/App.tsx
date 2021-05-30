import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <div className="MainContainer"></div>
      </div>
    </Router>
  );
}

export default App;
