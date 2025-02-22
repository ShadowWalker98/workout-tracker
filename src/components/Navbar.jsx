import {Link} from "react-router";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.js";

function Navbar() {
    let {user, setUser} = useContext(UserContext);
    let isLoggedIn = user !== null && user !== undefined;
    return (
        <nav className="navbar">
            <ul className="navbar-routes-list">
                {isLoggedIn && <li className="nav-list-item"><Link className="nav-link" to="/home"> Home </Link></li>}
                {!isLoggedIn && <li className="nav-list-item"><Link className="nav-link" to="/login"> Login </Link></li>}
                {isLoggedIn && <li className="nav-list-item"><Link className="nav-link" to="/logout"> Log out </Link></li>}
                {!isLoggedIn && <li className="nav-list-item"><Link className="nav-link" to="/signup"> Create Account </Link></li>}
            </ul>
        </nav>
    )
}

export default Navbar;