import React, {useState} from "react";


function MemberCardForm({members}){

    const [newMember, setNewMember] = useState({
        name:"",
        fav_author: "",
        
    })
        
      
        function handleChange(event) {

          setNewMember({
            ...newMember,
            [event.target.name]: event.target.value,
          });
        }

    function handleSubmit(event) {
        event.preventDefault();

     fetch("http://localhost:9393/members", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(members),
        })
            .then((r) => r.json())
            .then((members) => {
            setNewMember([...newMember, members]);
            }) ;

       
      }
    return(
        <div className = "form container">
            <form onSubmit={handleSubmit} className ="add-member">
                <h3>Add a new Member</h3>
                <input type ="text" 
                    name = "name" 
                    onChange = {handleChange} 
                    value ={newMember.name} 
                    placeholder="Member Name"/>
                <input type ="text" 
                    name = "fav_author" 
                    onChange = {handleChange} 
                    value ={newMember.fav_author} 
                    placeholder="Favorite Author"/>
                <input type ="submit" 
                    name ="submit" 
                    value="Submit New Member" 
                    className="submit" />
            </form>
        </div>

    )
}

export default MemberCardForm;