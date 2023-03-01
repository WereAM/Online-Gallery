import { useContext } from 'react';
import { UserContext } from '../components/UserContext';


export default function HomePage(){

    const {user} = useContext(UserContext);

    // {user!== ''}
    return(
        <>
        <div className="landing-content">
            <h>All your photos <br /> and albums <br /> in one place</h>
            <p>An Online Gallery.</p>
            <img src="https://m.media-amazon.com/images/I/71eOgACsdQL._AC_SL1500_.jpg"  alt=""/>
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