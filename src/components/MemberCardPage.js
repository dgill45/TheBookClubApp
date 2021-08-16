import React from "react";
import MemberCard from "./MemberCard";

function MemberCardPage({members, handleDelete}){

    

        const memberCards = members.map((member => {
            return <MemberCard key = {member.id} members = {members} handleDelete={handleDelete}/>
        })  
    )

    return (
        <div>
            <h2>Book Club Members</h2>
            {memberCards}
        </div>
    )
}

export default MemberCardPage;