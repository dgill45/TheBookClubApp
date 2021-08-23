import React from "react";
import {Link} from "react-router-dom";

function MemberCard({member, handleDeleteMember}){

    
    return (
        <div>
            <div className = "card">
                <div className = "card-body">
                    <h3>{member.name}</h3>
                    <h4>{member.fav_author}</h4>
                    
                    <Link to ={`/members/${member.id}`}> 
                    <button className ="clicked">View this Member</button>
                    </Link>
                    <button onClick = {handleDeleteMember}>Delete This Member!</button>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;