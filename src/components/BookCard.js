import React from "react";
import Comment from "./Comment"

function BookCard({books, handleDelete, onShowBook}){



    return (
        <div onClick={handleShowBook}>
            <div className = "card">
                <div className = "card-body">
                    <h3>{books.title}</h3>
                    <h4>{books.author}</h4>
                    <p>{books.publisher}</p>
                    <p>{books.genre}</p>
                    <button onClick={onShowBook}>View this Book</button>
                    <button onClick = {handleDelete}>Delete This Book!</button>
                </div>
                <Comment />
            </div>
        </div>
    )
}

export default BookCard;