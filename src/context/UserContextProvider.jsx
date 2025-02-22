import {useEffect, useState} from "react";
import {UserContext} from "./UserContext.js";

export default function UserContextProvider({children}) {
    let current = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(current)
    useEffect(() => {
        fetch("http://localhost:4001/v1/users/validate-session", {
            method: "GET",
            credentials: "include",
        }).then((res) => {
            if(res.status !== 200) {
                throw new Error("Redirect to login for authentication")
            }

            // get the csrf token
            let csrfToken = res.headers.get('x-csrf-token')
            console.log(csrfToken)
            let current = JSON.parse(localStorage.getItem("user"))
            let newUser = {
                ...current,
                "x-csrf-token": csrfToken,
            }
            console.log(newUser)
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser((prevUser) => ({...prevUser, "x-csrf-token": csrfToken}))
            return res.json()
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}