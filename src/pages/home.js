import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function HomePage(){

    const {user} = useContext(UserContext);

    const navigate = useNavigate();
    const handleClick = () => {
        (!user) ? navigate('/login') : navigate('/users')
    }
    
    return(
        <>
        <div className="landing-content">
            <h>This website <br /> is an online gallery <br /> containing users and <br /> all their albums</h>
            <p>You can view more details in the respective pages</p>
            <img src="https://m.media-amazon.com/images/I/71eOgACsdQL._AC_SL1500_.jpg"  alt=""/>
            <button onClick={handleClick}>Continue To Gallery</button>
        </div>        
        
        <footer>
            <h3>CONTACTS</h3>
            <p>Author: Michelle Were</p>
            <p>Mail to : thisproject@gmail.com.com</p>
            <p>Phone: +1 234-566-456</p>
        </footer>
        </>
    );
}