import React from "react";

function BookCardForm(handleAddBook){


    return(
        <div className = "form container">
            <form onSubmit={handleAddBook} addclasstosheet= {addClassToSheet} className ="add-Class">
                <h3>Add a new Book</h3>
                <input type ="text" 
                    name = "charName" 
                    onChange = {handleChange} 
                    value ={formData.charName} 
                    placeholder="Name your character"/>
                <input type ="text" 
                    name = "name" 
                    onChange = {handleChange} 
                    value ={formData.name} 
                    placeholder="Enter your character's Class"/>
                <input type ="text" 
                    name = "image" 
                    onChange = {handleChange} 
                    value = {formData.image} 
                    placeholder ="image url"></input>
                <input type ="text" 
                    name = "desc" 
                    onChange = {handleChange } 
                    value = {formData.desc} 
                    placeholder = "description"></input>
                <input type ="submit" 
                    name ="submit" 
                    value="Create New Character" 
                    className="submit" />
            </form>
        </div>

    )
}

export default BookCardForm;