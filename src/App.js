import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
