import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Newplace from './places/pages/Newplace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
const App =() => {
  return <BrowserRouter>
  <MainNavigation />
  <main className="mt-20">
    <Routes>
  <Route path="/" element={<Users />} />
  <Route path="/places/new" element={<Newplace />} />
  <Route path="/places/:placeId" element={<UpdatePlace />} />
  <Route path="/:userId/places/" element={<UserPlaces />} />
  <Route path="*" element={<div>404 pages is not found</div>} />
    </Routes>
    </main>
  </BrowserRouter>
}

export default App;
