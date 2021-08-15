import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./components/Home";
import MemberCardPage from "./components/MemberCardPage";
import BookCardPage from "./components/BookCardPage";
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom";

function App() {

  const [books, setBookCards] = useState([])
  const [members, setMemberCards] = useState([])
  

  
    useEffect(() => {
    fetch("http://localhost:9393/books")
    .then((r) => r.json())
    .then((setBookCards))

  },[]);

  useEffect(() => {
    fetch("http://localhost:9393/members")
    .then((r) => r.json())
    .then((setMemberCards))

  },[]);

  /*function handleDelete() {
    const deleteBooks = books.filter(books => books.id !== id)
    setBookCards(newBooks);
}*/
  return (

    <div className="App">
      <NavBar />
      <Switch>
        <Route path = "/books">
        <BookCardPage books = {books}  />
        </Route>
        <Route path = "/members">
          <MemberCardPage members = {members}/>
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = "*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>

  )
}

export default App;
