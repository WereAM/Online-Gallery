import React, {useContext, useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import UserAlbums from '../components/userAlbums';

export default function AlbumsPage() {

    let {userId} = useParams();

    const [albums, setAlbums] = useState([])
    const [user, setUser] = useState('')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(res => res.json())
        .then(albums => 
            {setAlbums(albums)})

    },[userId]);


    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user =>
            {setUser(user)})
    },[userId]);

    const username = user.username

    return(
        <div className='albums'>
            <h1>Albums by: {username} </h1>
            <div className='albumsList'>
                {albums.map((item, index)=> (
                    <div className='albumDetails' key={index}>
                        <UserAlbums item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}