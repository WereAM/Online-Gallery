import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const AlbumCount = ({id}) => {
    const [album, setAlbumCount] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then(res => res.json())
        .then(album =>
           {setAlbumCount(album)});
   
    },[id]);

    const albumCount = album.length;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/albums')
    }

    return(
        <>
        <div>
            <p>{albumCount} Albums </p>
            <button className='viewAlbums' onClick={handleClick}>View Albums</button>
        </div> 
        </>
    )
}

export default AlbumCount;

