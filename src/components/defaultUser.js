import React, {useState} from 'react';
import LoginPage from '../pages/login';
import UsersPage from '../pages/users';

export default function DefaultUser(){
    const defaultUser = {
        name : 'Michelle',
        password : 'michelle123'
    }

    const [user, setUser] = useState({name:''});
    const [error, setError] = useState(''); 
    
    const Login = (details) => {        
        if(details.name === defaultUser.name && details.password === defaultUser.password) {
            setUser({
                name: details.name
            });
        }else {
            setError('Details do not match!');
        }
    }

    return (
        <div>
            {(user.name !== '') ? (
                <>
                <UsersPage />
                <h2>Welcome <span>{user.name}</span></h2>
                </>
            ) : (
                <LoginPage Login={Login} error={error}/>
            )}  
        </div>
    );
}  

