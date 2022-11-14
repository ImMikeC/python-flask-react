import React from 'react'
import auth from './auth'
import {useHistory } from 'react-router-dom'

export const LandingPage = props => {

  let history = useHistory();

  function handleClick() {
    history.push("/app");
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={
        () => {
          auth.login(()=>{
            props.history.push('/app')
          })
        }
      }>
        Login
        </button>
    </div>
  )
}

