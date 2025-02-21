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
            <h1>Hello from Home!</h1>
            <h2> Welcome user: {(user !== null && user !== undefined) ? user["user_id"] : ""}</h2>
        </>
    )
}

export default Home;