import { useNavigate } from "react-router-dom";

export default function LandingPage (){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    return (
        <>
        <div className="landing-content">
            <h>All your photos <br /> and albums <br /> in one place</h>
            <img src="https://m.media-amazon.com/images/I/71eOgACsdQL._AC_SL1500_.jpg"  alt=""/>
            <p>An Online Gallery.</p>
            <button onClick={handleClick}>LOGIN</button>
        </div>        
        
        <footer>
            <h3>CONTACTS</h3>
            <p>Author: Michelle Were</p>
            <p>Mail to : thisproject@gmail.com.com</p>
            <p>Phone: +1 234-566-456</p>
        </footer>
        </>
    )
}