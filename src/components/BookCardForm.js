import React, {useState} from "react";


function BookCardForm({books}){

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
                    placeholder="Book Author"/>
                <input type ="text" 
                    name = "publisher" 
                    onChange = {handleChange} 
                    value = {newBook.publisher} 
                    placeholder ="publisher"></input>
                <input type ="text" 
                    name = "genre" 
                    onChange = {handleChange } 
                    value = {newBook.genre} 
                    placeholder = "genre"></input>
                <input type ="submit" 
                    name ="submit" 
                    value="Submit New Book" 
                    className="submit" />
            </form>
        </div>

    )
}

export default BookCardForm;