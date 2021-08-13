import Home from "./components/Home";
import MemberCardPage from "./components/MemberCardPage";
import BookCardPage from "./components/BookCardPage";
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom";
import './App.css';
/*import React, {useState, useEffect} from "react";*/


function App() {

  return (

    <div className="App">
      <NavBar >
      <Switch>
        <Route path = "/books">
          <BookCardPage />
          </Route>
        <Route path = "/members">
          <MemberCardPage />
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = "*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      </NavBar>
    </div>

  )
}

export default App;
