import React from "react";
import Comment from "./Comment"

function BookCard(){

    return (
        <div className = "card">
            <div className = "card-body">
                <h3>Title</h3>
                <h4>Author</h4>
                <p>Publisher</p>
                <p>Genre</p>
            </div>
            <Comment />
        </div>
    )
}

export default BookCard;