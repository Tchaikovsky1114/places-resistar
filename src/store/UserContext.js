import {createContext, useCallback, useState} from 'react';


export const UserContext = createContext({
  isLoggedIn : '',
  login: () => {},
  logout:() => {},
})



const UserProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[])
  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[])
  const userContext = {
    isLoggedIn,
    login,
    logout
  }

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider