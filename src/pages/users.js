import React, {useEffect, useState} from 'react';
import AlbumCount from '../components/albumCount'
import ListItem from '../components/listItems';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

export default function UsersPage(){
    const {session} = useContext(UserContext);
    
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>
            setState(users));
        },[session])
    
        return (
        <>
        <div className="users">
            
            <h1>Users: {(session)}</h1>
            <div className='usersList'>               
                {state.map((item, index)=>(
                    <div className='userDetails' key={index}> 
                        <ListItem item={item} />
                        <AlbumCount id={item.id} />
                    </div>
                ))}
                
            </div>
        </div>
        </>
    );
}


