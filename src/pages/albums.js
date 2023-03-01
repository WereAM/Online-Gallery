import React, {useContext} from 'react';
import { UserContext } from '../components/UserContext';

export default function AlbumsPage() {

    const {user} = useContext(UserContext);

    return(
        <>
            <p>{user.name}</p>
        </>
    );
}