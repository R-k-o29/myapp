import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav> 
            <Link to="/Home">Home</Link> |
            <Link to="/About">About</Link> |
            <Link to="/Contact">Contact</Link>
        </nav>
    );
}