import React, {useEffect, useState} from 'react';
import AlbumCount from '../components/albumCount'
import ListItem from '../components/listItems';

export default function UsersPage(){
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>
            setState(users));
    },[]);

    
    return (
        <>
        <div className="users">
            <h1>Users:</h1>
            <div className='usersList'>               
                {state.map((item, index)=>(
                    <div className='userDetails'> 
                        <ListItem item={item} key={index} />
                        <AlbumCount id={item.id} />
                    </div>
                ))}
                
            </div>
        </div>
        </>
    );
}


