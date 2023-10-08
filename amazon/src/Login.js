import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import amazon from '../src/amazon-logo-free-png.webp';
import './Login.css';
import { auth } from "./firebase";


function Login(){
    const history= useNavigate();
    const [email,setEmail]= useState('');
const [password, setPassword]=useState('');
const signIn=(e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
        if(auth){history('/');
    }
    })
    .catch((error)=>alert(error.message));
};
const register=(e)=>{
    e.preventDefault();
    auth 
    .createUserWithEmailAndPassword(email, password)
    .then(auth=>{
        if (auth){history('/');
        }
    })
    .catch((error)=>alert(error.message));  
};

    return (
        <div>
              <Link  to="/">
                <div className='img-logo'>
            <img className='header-logo-login' src={amazon} alt='Amazon logo'/>
            </div>
           </Link>
           <div className='main-login'>
<h1>Sign-in</h1>
<p className='nameOfInputs'>Email</p>
<input type='text' className='reciever' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
<p className='nameOfInputs'>Password</p>
<input type='password' className='reciever' value={password} onChange={(e)=> setPassword (e.target.value)} ></input>
<button className='signIN'onClick={signIn}> Sign In </button>
<small className='textAgreement'><p>By signing-in you agree to the AMAZON FAKE CLONE <br/>Conditions of Use & Sale. Please see our Privacy Notice,<br/> our Cookies Notice and our Interest-Based Ads Notice. </p></small>
<button className='createacc' onClick={register}> Create your Amazon Account </button>
           </div>
        </div>
    );
}

export default Login;
