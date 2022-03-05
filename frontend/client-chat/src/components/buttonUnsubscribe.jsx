import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteSubscribe } from '../service/requestApi'


const ButtonUnsubscibe = ({ token, id }) => {
  
  const navigate = useNavigate();

  const unsubscribe = async () => {

    await deleteSubscribe(token, id);

    navigate('/channels');
  }

  return (
    <button onClick={ unsubscribe }>
      Unsubscribe
      </button>
  );
}

export default ButtonUnsubscibe;