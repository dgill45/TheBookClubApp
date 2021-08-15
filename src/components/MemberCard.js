import React from "react";
import Comment from "./Comment"


function MemberCard({id, name, fav_author}){

    return (
        <div className = "card">
            <div className = "card-body">
                <h3>{name}</h3>
                <p>{fav_author}</p>
                <Comment />
            </div> 
        </div>
    )
}

export default MemberCard;