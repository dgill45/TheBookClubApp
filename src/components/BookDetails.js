import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Comment from './Comment';


function BookDetails(){

    const [book, setBook] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        fetch(`http://localhost:9393/books/${id}`)
        .then((res) => res.json())
        .then(book => setBook(book))

    }, [id])

    return (


        <div>
            {book && <div className = "card">
            <div className = "card-body">
                    <h3>{book.title}</h3>
                        <p>by</p>
                    <h4>{book.author}</h4>
                    <p>{book.publisher}</p>
                    <p>{book.genre}</p>
                </div>
                <Comment />
            </div>}
        </div>
    )
}

export default BookDetails;