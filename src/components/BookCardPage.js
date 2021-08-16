import React from "react";
import BookCard from "./BookCard";
import BookCardForm from "./BookCardForm";


function BookCardPage({books, newBook, handleAddBook, handleDelete, handleShowBook}){

      
    

     const bookCards = books.map((book => {
         return <BookCard key = {book.id} 
                    books = {books} 
                    handleDelete={handleDelete} />
     }) 

     )
    
    return (
        <div className ="card-box">
            <h2>Books</h2>
            {bookCards}
            <BookCardForm books ={books}
                newBook ={ newBook } 
                handleAddBook = {handleAddBook}/>
        </div>
    )
}

export default BookCardPage;

