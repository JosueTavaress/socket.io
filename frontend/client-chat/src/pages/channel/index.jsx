import React, { useEffect, useState } from 'react';
import { getChannels } from '../../service/requestApi';
import {  GetLocalStorage } from '../../service/localStorage'
import Loading from '../../components/loading';
import BtnRooms from '../../components/buttonRoom';

const Channels = () => {
    const [channels, setChannels] = useState([]);
    const [load, setLoad] = useState(true);
    const [token, setToken] = useState('');
      
      useEffect(() => {
        setToken(GetLocalStorage('token'));
      }, []);

      useEffect(() => {
         setTimeout(() => {
          const fechtApi = async () => {
            setChannels(await getChannels(token));
            setLoad(false);
           }
           fechtApi();
         }, 2000);

      },[token]);

  if (load) return <Loading />
  if (!token) return <div>user não autorizado é preciso si identificar</div> // componentizar
  if (!channels.length) return <div>não existe canais</div> // componentizar

  return (
    <section className='section'>
    {channels.map((el, index) => <BtnRooms key={index} token={token} props={el}/>)}
    </section>
    );
};

export default Channels;