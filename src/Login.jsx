import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/firebase'




function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    let submit = (e) => {
        e.preventDefault()
        console.log(email);
        console.log(pass);

        signInWithEmailAndPassword(auth, email, pass)
            .then((UserCredential) => {
                console.log(UserCredential.user);
                window.location = '/home'
                alert('Login Successfully')
            }).catch((error) => {
                console.log(error);
                console.log(error.code);
                console.log(error.message);
            })
    }



    return (
        <>
            <main>
                <div className="form-container">
                    <p className="title">Welcome, Login</p>
                    <form className="form">
                        <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="input" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                        {/* <input type='button' onClick={submit} className="form-btn" value="Log In" /> */}
                        <button type='button' onClick={submit} className="form-btn">Log In</button>
                    </form>
                    <p className="sign-up-label">
                        Don't have an account?<span className="sign-up-link"> <Link to='/signup'> Sign up </Link> </span>
                    </p>
                </div>
            </main>
        </>
    )
}

export default Login