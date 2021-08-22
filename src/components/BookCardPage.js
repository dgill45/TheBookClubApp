import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import BookCardForm from "./BookCardForm"


function BookCardPage(){

    const [books, setBooks] = useState([])
    const [showForm, setShowForm] = useState(false)
  
    
      useEffect(() => {
      fetch("http://localhost:9393/books")
      .then((r) => r.json())
      .then(setBooks)
  
    },[]);   
    
      function handleEditBook(id){
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
        }
    
      function handleDeleteBook(id) {
        fetch(`http://localhost:3000/books/${id}`, {
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

    

    function handleClick() {
        setShowForm((showForm) => !showForm)
      }
    

     const bookCards = books.map((book => {
         return <BookCard key = {book.id} 
                    book = {book}
                    handleDeleteBook={handleDeleteBook}
                    handleEditBook = {handleEditBook} />
     }) 

     )/*
     useEffect(() => {
      fetch("http://localhost:9393/members")
      .then((r) => r.json())
      .then((setMemberCards))
  
    },[])*/
    
    return (
        <div className ="card-box">
            <h2>Books</h2>
            {books && bookCards}
            {showForm ? <BookCardForm 
                         bookCards = {bookCards}
                          /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick}>Add a new Book</button>
            </div>
            
        </div>
    )
}

export default BookCardPage;

