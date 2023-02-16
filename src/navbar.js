import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
        <Link to="/home">HOME</Link>
        <Link to="/user">USER</Link>
        <Link to="/albums">ALBUMS</Link>
        </>
    );
}