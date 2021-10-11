import React, { useState } from 'react';
import Login from './components/Login';
import MeldcxInstance from './axios/meldx-axios';
import './App.css';
import Devices from './components/Devices/Devices';
import { useLocalStorage } from './useStorage';
import Modal from './components/Modal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', '');
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false);

  const handleOnLogin = async (email: string, password: string) => {
    try {
      await MeldcxInstance.post(`login`, {
        email: email,
        password: password,
      });
      setIsAuthenticated('true');
      setInvalidLogin(false);
    } catch (e) {
      setIsAuthenticated('');
      setInvalidLogin(true);
    }
  };

  const handleOnLogout = async () => {
    setIsAuthenticated('');
  };

  const handleResetLogin = async () => {
    setInvalidLogin(false);
  };

  return (
    <div className="container h-screen mx-auto">
      {
        isAuthenticated ? <Devices onLogout={handleOnLogout} /> : <Login onLogin={handleOnLogin} />
      }

      <Modal open={invalidLogin} onClose={handleResetLogin} />
    </div>
  );
}

export default App;
