import React from "react";
import NavBar from "./NavBar"
import BookCardPage from "./BookCardPage";
import MemberCardPage from "./MemberCardPage";



function Home(){

    return (
        <div>
            <NavBar /> 
            <BookCardPage />
            <MemberCardPage />  
        </div>
    )
}

export default Home;