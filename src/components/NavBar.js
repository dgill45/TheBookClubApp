import React from "react"
import {NavLink} from "react-router-dom"

function NavBar(){

    return (
        <nav className="navbar">
            <h1 className="display-4">Welcome to Book Club!</h1>
            <p className="lead">For people who love books and talking about books.</p>
            <NavLink exact to ="/">Home</NavLink>
            <NavLink to ="/members">Members</NavLink>
            <NavLink to ="/books">Books</NavLink>
        </nav>

    )
}

export default NavBar ;