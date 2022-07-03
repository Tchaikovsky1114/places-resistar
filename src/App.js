import React, { useContext, useEffect,Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import LoadingSpinner from './shared/components/UI/LoadingSpinner';
// import Users from './user/pages/Users';
// import UserPlaces from './places/pages/UserPlaces';
// import UpdatePlace from './places/pages/UpdatePlace';
// import Auth from './user/pages/Auth';
import { UserContext } from './store/UserContext';

const Users = React.lazy(() => import('./user/pages/Users'))
const Newplace = React.lazy(() => import('./places/pages/Newplace'))
const UserPlaces = React.lazy(() => import('./places/pages/UserPlaces'))
const UpdatePlace = React.lazy(() => import('./places/pages/UpdatePlace'))
const Auth = React.lazy(() => import('./user/pages/Auth'))


let logoutTimer;

const App = () => {
  const {token,login,logout,tokenExpirationDate} = useContext(UserContext);
  
  useEffect(()=>{
    if(token && tokenExpirationDate){
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
     logoutTimer = setTimeout(logout,remainingTime)
    }else{
     clearTimeout(logoutTimer)
    }
  },[token,logout,tokenExpirationDate])


  useEffect(()=>{
  const currentUserData =  JSON.parse(localStorage.getItem('user'));
  // token을 저장한 시간보다 현재 시간이 크다는 것은, 접속 후 1시간(설정시간)이 지나지 않았다는 것을 의미한다.
  if(currentUserData && new Date(currentUserData.expiration) > new Date()){
    login(currentUserData.userId,currentUserData.token,new Date(currentUserData.expiration))
  }
  },[login])


  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<Newplace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/:userId/places/" element={<UserPlaces />} />
        <Route path="*" element={<div>404 pages is not found</div>} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/:userId/places/" element={<UserPlaces />} /> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<div>404 pages is not found</div>} />
      </Routes>
    );
  }

  return (
    <>
      <MainNavigation />
      <main className="mt-20">
        <Suspense fallback={
          <LoadingSpinner large />
        }>
        {routes}
        </Suspense>
        </main>
    </>
  );
};

export default App;
