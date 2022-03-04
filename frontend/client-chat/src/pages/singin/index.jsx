import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateEmail from 'email-format-check';
import { saveLocalStorage } from '../../service/localStorage';
import api from '../../api/connection';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [unauthorizedUser, setUnauthorizedUser] = useState(false);

  const navigate = useNavigate();

  const pageSingUp = () => navigate('/singup');

  const verification = () => {
    const minimum = 4;
    if (password.length > minimum && validateEmail(email)) return true;
    return false;
  };

  const login = async () => {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      saveLocalStorage('token', response.data.token);
      navigate('/channels');

    } catch (err) {
      setUnauthorizedUser(true);
    };
  };

  if (unauthorizedUser) {
    return (
      <>
        <dir>senha ou email incorreto</dir>
        <button onClick={ () => setUnauthorizedUser(false) }>Retorna</button>
      </>
    );
  };

  return (
    <section>
      <div >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={!verification()}
          type="button"
          onClick={login}
        >
          Get in
        </button>
        <button
          type="button"
          onClick={pageSingUp}
        >
          create new account
        </button>
      </div>
    </section>
  );
};

export default Login;