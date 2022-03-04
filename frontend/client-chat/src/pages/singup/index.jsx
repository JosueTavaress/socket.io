import React, { useState } from 'react';
import validateEmail from 'email-format-check';
import { saveLocalStorage } from '../../service/localStorage';
import api from '../../api/connection';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();

  const verification = () => {
    const minimum = 4;
    if (password.length > minimum && validateEmail(email)) return true;
    return false;
  };

  const register = async () => {
    const request = {
      name,
      password,
      email,
      lastName
    }

    try {
    const newUser = await api.post('/signup', request);
    saveLocalStorage('token', newUser.data.token);
    navigate('/channels');
  } catch (err) {
    setUserExist(true);
    }
  }

  if (userExist) {
    return (
      <div>usuario já cadastrado</div>
    )
  }

  return (
    <section>
      <div>
      <h2>Register</h2>
      <div>
      <input 
      type="text"
      placeholder="Name"
      onChange={ (e) => setName(e.target.value) }
      />
      <input 
      type="text" 
      placeholder='Last name'
      onChange={ (e) => setLastName(e.target.value) }
      />
      </div>
      <input
      type="text"
      placeholder='Email'
      onChange={ (e) => setEmail(e.target.value) }
      />
      <input 
      type="password" 
      placeholder='Password'
      onChange={ (e) => setPassword(e.target.value) }
      />
      <button
      disabled={ !verification() }
      onClick={ register }
      >
        Register
        </button>
      </div>
    </section>
  );
};

export default SingUp;