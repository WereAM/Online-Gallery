import React, {useEffect, useState} from 'react';
import AlbumCount from '../components/albumCount'
import ListItem from '../components/listItems';
import { useNavigate } from "react-router-dom";


export default function UsersPage(){

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users =>
            setUsers(users));
        },[])

        const navigate = useNavigate();
        const handleClick = (event) => {
            const userId = event.target.id;
            navigate(`/${userId}/albums`)
        }
    
        return (
        <div className="users">
            

            <h1>Users: </h1>
            <div className='usersList'>               
                {users.map((item, index)=>(
                    <div className='userDetails' key={index}> 
                        <ListItem item={item} />
                        <AlbumCount id={item.id} />
                        <button id={item.id} className='viewAlbums' onClick={handleClick}>View Albums</button>
                    </div>
                ))}
            </div>

        </div> 
    );
}


