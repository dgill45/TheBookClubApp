import React from "react";
import Comment from "./Comment"


function MemberCard(){

    return (
        <div className = "card">
            <div className = "card-body">
                <h3>Donell Gill</h3>
                <p>favorite author: Sir Arthur Conan Doyle</p>
                <Comment />
            </div> 
        </div>
    )
}

export default MemberCard;