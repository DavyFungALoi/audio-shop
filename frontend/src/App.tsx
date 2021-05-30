import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <Route path="/" component={HomeScreen} exact />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
