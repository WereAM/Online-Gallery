import React, {useContext} from 'react';
import { UserContext } from '../components/UserContext';

export default function AlbumsPage() {

    const {session} = useContext(UserContext);

    return(
        <>
            <p>{session?.name}</p>
        </>
    );
}