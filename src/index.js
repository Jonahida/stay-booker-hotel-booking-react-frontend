import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import { router } from './router';
import { AuthProvider } from './contexts/AuthContext';
import reportWebVitals from './reportWebVitals';

import { makeServer } from './mirage/mirageServer';

if (import.meta.env.DEV) {
  makeServer();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
