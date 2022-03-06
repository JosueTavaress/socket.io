import React from 'react';
import '../styles/loading.css'

const Loading = ({ setUnauthorizedUser }) => {
  return (
  <>
  <div className='container-loading'>
    <div className='spin'></div>
  </div>
  </>
  )
}

export default Loading;