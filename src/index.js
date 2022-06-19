import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import PlaceProvider from './store/PlaceContext';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PlaceProvider>
<App />
</PlaceProvider>
);
