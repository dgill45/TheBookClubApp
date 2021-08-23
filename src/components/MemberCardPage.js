import React, {useState, useEffect} from "react";
import MemberCard from "./MemberCard";
import MemberCardForm from "./MemberCardForm";

function MemberCardPage(){

    const [members, setMembers] = useState([])
    const [showForm, setShowForm] = useState(false)
  
    
     useEffect(() => {
      fetch("http://localhost:9393/members")
      .then((r) => r.json())
      .then((setMembers))
  
    },[])
    
      function handleEditMember(id){
        fetch(`http://localhost:9393/members/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(members),
            })
              .then((r) => r.json())
              .then((members) => {
                const updatedMemberList =members.filter((member) =>{
                  return member.id !==id      
                  })     
                  setMembers(updatedMemberList)
          })
        }
    
      function handleDeleteMember(id) {
        fetch(`http://localhost:3000/members/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
           const updatedMemberList =members.filter((member) =>{
             return member.id !==id      
             })
             setMembers(updatedMemberList)
          });
      }

    

    function handleClick() {
        setShowForm((showForm) => !showForm)
      }
    

     const memberCards = members.map((member => {
         return <MemberCard key = {member.id} 
                    member = {member}
                    handleDeleteMember={handleDeleteMember}
                    handleEditMember = {handleEditMember} />
     }) 

     )
    
    return (
        <div className ="card-box">
            <h2>Members</h2>
            {members && memberCards}
            {showForm ? <MemberCardForm 
                         memberCards = {memberCards}
                          /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick}>Add a new Member</button>
            </div>
            
        </div>
    )
}


export default MemberCardPage;