import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import PlaceProvider from './store/PlaceContext';
import UserProvider from './store/UserContext';
import { BrowserRouter } from 'react-router-dom';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
<PlaceProvider>
<App />
</PlaceProvider>
</UserProvider>
</BrowserRouter>
);
