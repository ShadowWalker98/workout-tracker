import Navbar from "./Navbar.jsx";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";


function Home() {
    const {
        user,
        setUser
    } = useContext(UserContext)
    return (
        <>
            <Navbar/>
            <h2> Welcome {(user !== null && user !== undefined) ? user["first_name"] + "!" : ""}</h2>
        </>
    )
}

export default Home;