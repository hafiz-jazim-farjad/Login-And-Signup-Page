import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";


function SignUp() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  let submit = () => {
    createUserWithEmailAndPassword(auth, email, pass).then((UserCredential) => {
      console.log(UserCredential.user);
      alert('Account Created Successfully')
      window.location = '/login'
    }).catch((error) => {
      console.log(error.code);
      // console.log(error.message);
      // alert('User alreasdy exist')
    });

  }


  return (
    <>
      <main>
        <div className="form-container">
          <p className="title">Create account</p>
          <form className="form">
            <input type="email" className="input" placeholder="Email" id='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" id='pass' onChange={(e) => setPass(e.target.value)} />
            <input type='button' className="form-btn" value='Create account' onClick={submit} />
          </form>
          <p className="sign-up-label">
            Already have an account?<span className="sign-up-link"> <Link to='/login'> Log in </Link></span>
          </p>
        </div>
      </main>
    </>
  )
}

export default SignUp