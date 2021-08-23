import React from "react";
import {Link} from "react-router-dom";

function BookCard({book, handleDeleteBook}){

    
    return (
        <div>
            <div className = "card">
                <div className = "card-body">
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                    <p>{book.publisher}</p>
                    <p>{book.genre}</p>
                    <Link to ={`/books/${book.id}`}> 
                    <button className ="clicked">View this Book</button>
                    </Link>
                    <button onClick = {handleDeleteBook}>Delete This Book!</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard;