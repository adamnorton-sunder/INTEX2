import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './components/Login/UserContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <UserProvider>
        <App />
      </UserProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
