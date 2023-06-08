import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login( { authHandler } ) {

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const [authToken, setAuthToken] = useState('')

  function handleLogin(){

    const url = 'https://localhost:7200/api/Authentication/login';

    const payload = { 
                      username: username, 
                      password: password
                    }

    console.log(payload);

    // to-do 
    // - post to auth API
    // - redirect to next page if logged in
    // - error messages
    axios.post(url, payload)
      .then(response => {
        // Handle the response data
        console.log('Response:', response.data);
        authHandler(response.data.token)
      })
      .catch(error => {
        // Handle the error
        console.error('Error:', error);
      })
  }

  return (
    <>
      <div className='box'>
        <h2> Login </h2>

        <div className='auth-fields'>
          <input type={'text'} placeholder='Username' className='margin-125' onChange={ (event) => setUsername(event.target.value) }/>
          <input type={'password'} placeholder='Password' className='margin-125' onChange={ (event) => setPassword(event.target.value) }/>

          <button className='auth-button' onClick={ () => handleLogin() } > Log in </button> 
        </div>

        <h4> Not registered ? Sign up <Link to={'/register'}>here</Link>...or else! </h4>

      </div>

    </>
  )
}
