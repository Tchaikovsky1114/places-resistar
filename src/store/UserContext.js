import {createContext, useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export const UserContext = createContext({
  isLoggedIn : false,
  login: (uid,token) => {},
  logout:() => {},
  token:null,
  userId : null,
  tokenExpirationDate: null,
  setTokenExpirationDate:() => {}
})



const UserProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState()




  const login = useCallback((uid,token,expirationDate)=>{
    setToken(token);
    setUserId(uid);
    //  1시간 설정
    const tokenExpiration = expirationDate || new Date(new Date().getTime() + 60 * 1000 * 60);
    setTokenExpirationDate(tokenExpiration)

    localStorage.setItem('user',JSON.stringify({
      userId: uid,
      token,
      expiration: tokenExpiration.toISOString()
    }))
    
  },[])

  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('user');
  },[])
  
  const userContext = {
    isLoggedIn: !!token,
    token:token,
    login:login,
    logout:logout,
    userId:userId,
    tokenExpirationDate,
    setTokenExpirationDate
  }

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserProvider