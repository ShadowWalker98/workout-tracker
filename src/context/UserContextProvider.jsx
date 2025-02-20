import {useState} from "react";
import {UserContext} from "./UserContext.js";

export default function UserContextProvider({children}) {
    let current = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(current)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}