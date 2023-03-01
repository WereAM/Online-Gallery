import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/login';
import { UserContext } from './UserContext';

export default function DefaultUser(){

    const {user, setUser} = useContext(UserContext);

    const defaultUser = {
        name : 'Michelle',
        password : 'michelle123'
    }

    // const [user, setUser] = useState({name:''});
    const [error, setError] = useState('');; 
    const navigate = useNavigate();
    
    const Login = (details) => {    
        if(details.name === defaultUser.name && details.password === defaultUser.password) {
            setUser({
                name: details.name
            });
            navigate('/users');
            }else {
            setError('Details do not match!');
        }
    }

    return (
        <div>
            <LoginPage Login={Login} error={error}/>
        </div>
    );
}  

