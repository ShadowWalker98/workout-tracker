import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";
import {Link} from "react-router";
import Navbar from "./Navbar.jsx";

let logoutURL = "http://localhost:4001/v1/users/logout"

function Logout() {

    async function logoutHandler() {
        console.log("Logging out...")
        let user_id = user === null || undefined ? -1 : user["user_id"]
        if(user_id === -1) return
        // draft the request to be sent to the server

        let res = await fetch(logoutURL, {
            method: 'DELETE',
            credentials: "include",
            headers: {
                "x-csrf-token": user["x-csrf-token"],
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user_id": user_id
            })
        })
        console.log("status code received: ", res.status)
        if (res.status !== 200) {
            console.log("an error occurred while logging out")
            return
        }
        res = await res.json()
        console.log(res)
        // delete the user token from localStorage
        localStorage.removeItem("user")
        // set the UserContext to be null
        setUser(null)

    }

    const {
        user,
        setUser
    } = useContext(UserContext)
    return (
        <>
            <Navbar/>
            <p> {user === null || undefined ? "You have to login to logout" :  "User: " + user["user_id"]}</p>
            { user !== null && user !== undefined && <button onClick={logoutHandler}>logout</button>}
            {(user === null || user === undefined) && <Link to="/login"> Please login!</Link>}
        </>
    )
}

export default Logout;