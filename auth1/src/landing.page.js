import React from 'react'
import auth from './auth'
import {useHistory } from 'react-router-dom'

const LandingPage = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/app");
  }

  return (
    <div>
      <p>Landing Page</p>
      <button onClick={handleClick}>
        Login
        </button>
    </div>
  )
}

export default LandingPage