import { createContext, useState } from "react";

export const UserContext = createContext(null);


export const ContextWrapper = ({children}) => {
const [user, setUser] = useState()

 return   (<UserContext.Provider value={{user, setUser, name: 'username'}}>
{children}
    </UserContext.Provider>)
}


