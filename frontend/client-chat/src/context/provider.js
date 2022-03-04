import React, { useState } from 'react';
import allContext from './context';

const ProviderContext = ({ children }) => {  
  const [token, setToken] = useState('');
  const [room, setRoom] = useState(0);
  const [message, setMessage] = useState('');
  const [idChannel, setIdChannel] = useState(0);

  const stateGlobal = {
  setIdChannel,
  setRoom,
  setToken,
  setMessage,
  idChannel,
  room,
  token,
  message,
  };

  return (
    <main>
      <allContext.Provider value={ stateGlobal }>{children}</allContext.Provider>
    </main>
  );
};

export default ProviderContext;