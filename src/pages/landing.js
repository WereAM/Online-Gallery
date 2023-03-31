import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function LandingPage (){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    return (
        <>
        <div className="landing-content">
            <p id ='hotshot'>All your <br /> photos and albums <br /> in one place</p>
            <p id="extra">An Online Gallery.</p>
            <img className="img1" src="https://m.media-amazon.com/images/I/71eOgACsdQL._AC_SL1500_.jpg"  alt=""/>
            <img  className="img2" src="http://macarthurpolsatschool.org.au/wp-content/uploads/2018/10/gallery-film-strips.jpg" alt=""/>
            <img className="img3" src="https://enviragallery.com/wp-content/uploads/2015/12/photoalbumsinwordpress.jpg" alt="" />
            <button onClick={handleClick}>Continue To Gallery</button>
        </div>

        <Footer />
        
        </>
    )
}