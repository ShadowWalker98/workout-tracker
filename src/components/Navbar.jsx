import {Link} from "react-router";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";

function Navbar() {
    let {user, setUser} = useContext(UserContext);
    let isLoggedIn = user !== null && user !== undefined;
    return (
        <nav>
            <ul>
                {isLoggedIn && <li><Link to="/home"> Home </Link></li>}
                {!isLoggedIn && <li><Link to="/login"> Login </Link></li>}
                {isLoggedIn && <li><Link to="/logout"> Log out </Link></li>}
                {!isLoggedIn && <li><Link to="/signup"> Create Account </Link></li>}
            </ul>
        </nav>
    )
}

export default Navbar;