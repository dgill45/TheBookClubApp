import React from "react";
import Comment from "./Comment"

function BookCard({id,title, author, publisher, genre, handleDelete}){

    return (
        <div className = "card">
            <div className = "card-body">
                <h3>{title}</h3>
                <h4>{author}</h4>
                <p>{publisher}</p>
                <p>{genre}</p>
                <button onClick = {handleDelete}>delete book</button>
            </div>
            <Comment />
        </div>
    )
}

export default BookCard;