import {Link} from "react-router";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home"> Home </Link></li>
                <li><Link to="/signup"> Signup </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;