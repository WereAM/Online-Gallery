import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
        <div className="logo">
            <a href="../home">
                <img src="https://cdn.dribbble.com/users/1937255/screenshots/15040485/media/a40ebb552abe943e6b1cc4698665141c.png?compress=1&resize=400x300" alt="" width='200' height='70'></img>
            </a>
        </div>

        <div className="links">
            <Link to="/home">HOME</Link>
            <Link to="/users">USERS</Link>
            <Link to="/albums">ALBUMS</Link>
        </div>
        </>
    );
}