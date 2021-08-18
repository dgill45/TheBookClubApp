import React, {useState} from "react";
import BookCard from "./BookCard";


function BookCardPage({books, newBook, onAddBook, onDeleteBook, onShowBook}){

    const [updatedBookList, setBooks] = useState([])
    

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

    const [showForm, setShowForm] = useState([])

    function handleClick() {
        setShowForm((showForm) => !showForm);
      }
    

     const bookCards = books.map((books => {
         return <BookCard key = {books.id} 
                    books = {books} 
                    updatedBookList = {updatedBookList}
                    onDeleteBook={handleDelete}
                    onAddBook = {handleAddBook} 
                    onDeleteBook = {handleDeleteBook}
                    onShowBook ={handleShowBook} />
     }) 

     )
    
    return (
        <div className ="card-box">
            <h2>Books</h2>
            {bookCards}
            {showForm ? <BookCardForm 
                            newBook = {newBook}
                         bookCards = {bookCards}
                          onAddBook={onAddBook}
                           /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick}>Add a new Book</button>
            </div>
            
        </div>
    )
}

export default BookCardPage;

