import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./components/Home";
import MemberCardPage from "./components/MemberCardPage";
import BookCardPage from "./components/BookCardPage";
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom";

function App() {

  const [books, setBookCards] = useState([])
  const [newBook, setNewBook] = useState([])
  const [updatedBookList, setBooks] = useState([])
  const [members, setMemberCards] = useState([])
  

  
    useEffect(() => {
    fetch("http://localhost:9393/books")
    .then((r) => r.json())
    .then((setBookCards))

  },[]);


function handleAddBook(books){
  fetch("http://localhost:9393/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(books),
      })
        .then((r) => r.json())
        .then((books) => {
          setNewBook([...newBook, books]);
        }) ;
}


  function handleShowBook(id) {
    fetch(`http://localhost:9393/books/${id}`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then(() => {
      books.filter((book) =>{
         return book.id !==id      
         })
      });
  }

  function handleEditBook(books){
    fetch(`http://localhost:9393/books/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(books),
        })
          .then((r) => r.json())
          .then((books) => {
            const updatedBookList =books.filter((book) =>{
              return book.id !==id      
              })     
              setBooks(updatedBookList)
      })


  function handleDeleteBook(id) {
    fetch(`http://localhost:3000/clas/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
       const updatedBookList =books.filter((book) =>{
         return book.id !==id      
         })
         setBooks(updatedBookList)
      });
  }

  useEffect(() => {
    fetch("http://localhost:9393/members")
    .then((r) => r.json())
    .then((setMemberCards))

  },[]);
  }

  return (

    <div className="App">
      <NavBar />
      <Switch>
        <Route path = "/books">
        <BookCardPage books = {books} 
              newBook = {newBook} 
              updatedBookList = {updatedBookList}
              handleAddBook = {handleAddBook} 
              handleDeleteBook = {handleDeleteBook}
              handleShowBook ={handleShowBook}
              />
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
