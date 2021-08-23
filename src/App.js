import React from "react";
import './App.css';
import "./styles/NavStyles.css"
import Home from "./components/Home";
import MemberCardPage from "./components/MemberCardPage";
import BookCardPage from "./components/BookCardPage";
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

function App() {

 
  return (
    <Router>
      <div className="App">
       <NavBar />
        <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = '/books/:id'>
          <BookDetails />
        </Route>
        <Route path = "/books">
          <BookCardPage />
        </Route>
        <Route path = '/members/:id'>
          <BookDetails />
        </Route>
        <Route path = "/members">
          <MemberCardPage />
        </Route>
        <Route path = "*">
          <h1>404 Not Found</h1>
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
