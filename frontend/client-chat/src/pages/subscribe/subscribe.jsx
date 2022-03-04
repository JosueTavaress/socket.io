import React, { useContext } from 'react';
import allContext from '../../context/context';
import '../../styles/btnRoom.css'
import { GetLocalStorage } from '../../service/localStorage';
import { subscribeChannel } from '../../service/requestApi';
import { useNavigate } from 'react-router-dom';

const SubUser = () => {
  const { idChannel } = useContext(allContext);
  const navigate = useNavigate();

  const retorn = () => {
    navigate('/channels');
  }

  const subscribe = async () => {
    const token = GetLocalStorage('token');
    await subscribeChannel({token, id: idChannel});
    navigate('/channels');
  }

  return ( 
  <section className='section'>
    <button className='button arrow' onClick={ subscribe } >Subscribe</button>
    <button className='button arrow' onClick={retorn}>Return</button>
  </section>
  );
};

export default SubUser;