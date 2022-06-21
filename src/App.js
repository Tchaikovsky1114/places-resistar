import React, { useState, useCallback, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Newplace from './places/pages/Newplace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { UserContext } from './store/UserContext';

const App = () => {
  const {isLoggedIn} = useContext(UserContext);

  let routes;
  if (isLoggedIn) {
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
      <main className="mt-20">{routes}</main>
    </>
  );
};

export default App;
