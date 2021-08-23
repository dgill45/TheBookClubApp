import React from "react"
import {NavLink} from "react-router-dom"

function NavBar(){

    return (
        <nav className="navbar">
            <h1 className="display-4">Welcome to Book Club!</h1>
            <p className="lead">For people who love books and talking about books.</p>
            <header className="jumbotron">
                <div className= "nav-link-container flex-row">
                    <div className = "nav-link flex-row">
                        <NavLink exact to ="/">Home</NavLink>
                    </div>
                    <div className = 'nav-link'>
                        <NavLink to ="/members">Members</NavLink>
                    </div>
                    <div className = 'nav-link'>
                        <NavLink to ="/books">Books</NavLink>
                    </div>
                </div>
            </header>
        </nav>

    )
}

export default NavBar ;