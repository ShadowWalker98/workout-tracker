import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";
import Signup from "./Signup.jsx";
import Navbar from "./Navbar.jsx";


function SignupGroup() {
    const {
        user,
        setUser
    } = useContext(UserContext);

    return (
        <>
            <Navbar />
            {user === null || user === undefined ? <Signup/> : "Please logout to view this page"}
        </>
    )
}

export default SignupGroup;