import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.js";
import Navbar from "./Navbar.jsx";

function Signup() {
    const {
        user,
        setUser
    } = useContext(UserContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onClickHandler(event) {
        event.preventDefault();
        let res = await fetch('http://localhost:4001/v1/users/signup', {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                "email": email,
                "password": password,
            },)
        })
        console.log("response code received: ", res.status)
        if(res.status !== 200) {
            console.log("user unauthorized: ", res.status)
            return;
        }
        let csrfToken = res.headers.get('x-csrf-token');
        res = await res.json()
        let loggedInUser = res["user"]
        loggedInUser["x-csrf-token"] = csrfToken
        console.log(loggedInUser)
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        setUser(loggedInUser);
    }

    return (
        <>
            <div>
                <p>Welcome to Gambare! Please sign up!</p>
                <form>
                    <div>
                        <input type='text'
                               placeholder='First Name'
                               autoComplete="first_name"
                               value={email}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type='text'
                               placeholder='Last Name'
                               autoComplete="last_name"
                               value={email}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type='text'
                               placeholder='Email Address'
                               autoComplete="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>

                <button type="submit" onClick={(e) => onClickHandler(e)}>Submit!</button>
            </div>
        </>
    )
}

export default Signup;