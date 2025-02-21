import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";

function LoginGroup() {
    const {
        user,
        setUser
    } = useContext(UserContext)
    return (
        <>
            <Navbar />
            {user === null || user === undefined ? <Login/> : null}
            <p> Logged in user id is: {user === undefined || user === null ? -1 : user["user_id"]}</p>
        </>

    )
}

export default LoginGroup;