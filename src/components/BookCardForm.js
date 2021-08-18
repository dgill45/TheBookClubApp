import React, {useState} from "react";
import { useState } from "react";


function BookCardForm({books, newBook }){

    const [newBook, setNewBook] = useState({
        title:"",
        author: "",
        publisher: "",
        genre: ""
    })
        
      
        function handleChange(event) {

          setNewBook({
            ...newBook,
            [event.target.name]: event.target.value,
          });
        }

    function handleSubmit(event) {
        event.preventDefault();

     fetch("http://localhost:9393/books", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(books),
        })
            .then((r) => r.json())
            .then((books) => {
            setNewBook([...newBook, books]);
            }) ;

       
      }
    return(
        <div className = "form container">
            <form onSubmit={handleSubmit} className ="add-book">
                <h3>Add a new Book</h3>
                <input type ="text" 
                    name = "title" 
                    onChange = {handleChange} 
                    value ={newBook.title} 
                    placeholder="Book Title"/>
                <input type ="text" 
                    name = "author" 
                    onChange = {handleChange} 
                    value ={newBook.author} 
                    placeholder="Enter your character's Class"/>
                <input type ="text" 
                    name = "publisher" 
                    onChange = {handleChange} 
                    value = {newBook.publisher} 
                    placeholder ="image url"></input>
                <input type ="text" 
                    name = "genre" 
                    onChange = {handleChange } 
                    value = {newBook.genre} 
                    placeholder = "description"></input>
                <input type ="submit" 
                    name ="submit" 
                    value="Add a new book" 
                    className="submit" />
            </form>
        </div>

    )
}

export default BookCardForm;