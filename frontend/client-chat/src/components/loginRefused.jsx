import React from 'react';

const loginRefused = ({ setUnauthorizedUser }) => {
  return (
  <section>
    <div>
      <h1>Senha ou email incorreto</h1>
      <button onClick={ setUnauthorizedUser(false) }>Return</button>
    </div>
  </section>
  )
}

export default loginRefused;