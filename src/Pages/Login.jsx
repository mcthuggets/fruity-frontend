import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className='box'>
        <h2> Login </h2>

        <div className='auth-fields'>
          <input type={'text'} placeholder='Username' className='margin-125'/>
          <input type={'password'} placeholder='Password' className='margin-125'/>

          <button className='auth-button'> Log in </button> 
        </div>

        <h4> Not registered ? Sign up <Link href='/register'>here</Link>...or else! </h4>

      </div>

    </>
  )
}
