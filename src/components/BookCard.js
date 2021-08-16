import React from "react";
import Comment from "./Comment"

function BookCard({title, author, publisher, genre, handleDelete}){

    return (
        <div onClick={handleShowBook}>
            <div className = "card">
                <div className = "card-body">
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <p>{publisher}</p>
                    <p>{genre}</p>
                    <button onClick={handleShowBook}>View this Book</button>
                    <button onClick = {handleDelete}>Delete This Book!</button>
                </div>
                <Comment />
            </div>
        </div>
    )
}

export default BookCard;