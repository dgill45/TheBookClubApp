import React from "react";
import BookCard from "./BookCard";


function BookCardPage({books, handleDelete}){

      
    

     const bookCards = books.map((book => {
         return <BookCard key = {book.id} books = {books} handleDelete={handleDelete}/>
     }) 

     )
    
    return (
        <div className ="card-box">
            {bookCards}
        </div>
    )
}

export default BookCardPage;

