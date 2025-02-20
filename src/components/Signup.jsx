import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";

function Signup() {
    const {
        user,
        setUser
    } = useContext(UserContext)
    return (
        <>
            <Navbar />
            <Login />
            <p> Logged in user id is: {user === undefined ? -1 : user === null ? -1 : user["user_id"]}</p>
        </>

    )
}

export default Signup;