import React, { useState, useEffect, useContext } from 'react';
import allContext from '../context/context';
import { saveLocalStorage } from '../service/localStorage'
import { useNavigate } from 'react-router-dom';
import '../styles/btnRoom.css';
import { getSubs } from '../service/requestApi';

const BtnRooms = ({ props, token }) => {
  const [userSub, setUserSubs] = useState([]);
  const { setIdChannel } = useContext(allContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchtSub = async () => {
      setUserSubs(await getSubs(props.id, token))
    }
    fetchtSub();
  }, [token, props.id]);

  const logs = () => {
    saveLocalStorage('channel', props.name);
    setIdChannel(props.id);
    if (!userSub.subscribe[0]) navigate('/subscribe');
    if (userSub.subscribe[0]) navigate(`/chat/${props.id}`);
  }

  return (
    <button 
    key={ props.id }
    className='button arrow'
    onClick={ logs }
    >
      { props.name }
    </button>
  );
};

export default BtnRooms;