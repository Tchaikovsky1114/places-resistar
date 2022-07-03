import React,{useEffect, useState} from 'react';
import Userlist from '../components/Userlist';
import ErrorModal from '../../shared/components/UI/ErrorModal';
import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import { useHttp } from '../../shared/hooks/useHttp';


const Users = () => {
  // image:'https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  const {isLoading,error,sendRequest,clearError} = useHttp();
  const [loadedUsers, setLoadedUsers] = useState();
  // useEffect 내에서 async/await을 사용하지 말아야 하는 이유는
  // async/await은 항상 promise를 반환하기 때문이다.
  useEffect(()=>{
    const fetchUser = async () => {
      try{
        const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
          )
        setLoadedUsers(responseData.users);
      
      }catch(err){}
    }
    fetchUser();
  },[sendRequest])
  return (<>
  <ErrorModal error={error} onClear={clearError} />
  {isLoading && <LoadingSpinner  />}
  {!isLoading && loadedUsers && <Userlist items={loadedUsers} />}
  </>)
};

export default Users;