import React from "react";
import { signOut } from "firebase/auth";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const history = useNavigate();

    const handleClick = () => {
        signOut(database)
            .then(
                history('/')
            )
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}

export default HomePage;