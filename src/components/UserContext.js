import { createContext, useEffect, useState } from "react";
import { getSavedSession, setSavedSession } from "./session";

export const UserContext = createContext(getSavedSession());

export const ContextWrapper = ({children}) => {
    // const [user, setUser] = useState()

    // let session = sessionStorage.getItem('userName')

    const [session, setSession] = useState();
    useEffect(() => {
        let sess = getSavedSession()
        setSession(sess);
    },[session])
    
    return (
    // <UserContext.Provider value={{user, setUser, name: 'username'}}>
    <UserContext.Provider value={{session, setSession}}>
        {children}
    </UserContext.Provider>
    )
}
