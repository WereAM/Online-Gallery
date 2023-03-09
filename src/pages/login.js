import React, {useState} from 'react';

export default function LoginPage ({Login, error}){

    const [details, setDetails] = useState({name: '', password: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        Login(details);
    }

    return(
        
        <div className='form'>
            <div className="login">

                <div className="userIcon">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" width='200' height='200'></img>
                </div>

            <form className="loginForm" onSubmit={handleSubmit}>
                <label> Name: </label>
                <br/>
                <input 
                    name='name' 
                    type={'text'} 
                    placeholder="Enter your username"
                    onChange={event => setDetails({...details, name: event.target.value})}
                    value={details.name}
                    />
                <br/>

                <label>Password: </label>
                <br/>
                <input 
                    name='password' 
                    type={'password'} 
                    placeholder="Enter your password"
                    onChange={event => setDetails({...details, password: event.target.value})}
                    value={details.password}
                    />
                <br/>

                <input className="loginBtn" type="submit" value="Sign In" />

                <p>{(error!=='')  ? (<div className='error'>{error}</div>) : ''} </p>
            
            </form> 
            </div>
        </div>
    );
}