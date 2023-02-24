import React, {useEffect, useState} from 'react';

const AlbumCount = ({id}) => {
    const [album, setAlbumCount] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then(res => res.json())
        .then(album =>
           {setAlbumCount(album)});
   
    },[id]);

    const albumCount = album.length;

    return(
        <div>
            <p>{albumCount} Albums </p>
        </div> 
    )
}

export default AlbumCount;

