import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './chat.css';
import ButtonUnsubscibe from '../../components/buttonUnsubscribe';
import { useParams } from 'react-router-dom';
import { GetLocalStorage } from '../../service/localStorage';
import { getMessagesChannel } from '../../service/requestApi';

import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:5050';
const socket = io(ENDPOINT);

socket.on('connect', () => console.log('new connect'));

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [token, setToken] = useState('');

  const { id } = useParams();

  useEffect(() => {
    setToken(GetLocalStorage('token'));
  }, []);

  useEffect(() => {

    const handleNewMessage = newMessage =>
      setMessages([...messages, newMessage]);

    socket.on('message', handleNewMessage);
    return () => socket.off('message', handleNewMessage);

  }, [messages]);

  useEffect(() => { 
    const fecthMessages = async () => {
      setMessages(await getMessagesChannel(id, token));
    }

    fecthMessages();
  }, [id, token]);



  const handleFormSubmit = event => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit('Select_Channel_Send_Message', {
        channel: id,
        message,
        token,
      });
      setMessage('');
    }
  }

  const handleInputChange = event =>
    setMessage(event.target.value);

  return (
    <div className='chat-card'>
    <ButtonUnsubscibe id={ id } token={token}/>
    <main className="container">
      <ul className="list">
        {messages.map((msg, index) => (
          <li
            key={index}
          >
            <span className='message-chat'>
              {msg.message}
            </span>
            <span className='date-message'>
              {dayjs(msg.data_time).format('DD/MM HH:mm')}
            </span>
          </li>
        ))}
      </ul>
      <form className='form-message-chat' onSubmit={handleFormSubmit}>
        <input
          className='input-chat'
          onChange={handleInputChange}
          placeholder="Type your message"
          type="text"
          value={message}
        />
      </form>
    </main>
    </div>
  );
};

export default Chat;