import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo/logo2.png'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="text-center login">
          <img src={logo} alt=""/>  
          <form className="py-5">
              <input type="text" placeholder="Name"id="input" /><br/><br/>
              <input type="email" name="" id="input" placeholder="Email"/><br/><br/>
              <input type="password" name="" id="input" placeholder="Password"/><br/><br/>
              <input type="password" name="" id="input" placeholder="Confirm Password"/><br/><br/>
              <input className="submitBtn " type="submit" value="Sign in"/><br/><br/>
              <Link style={{color:"red"}} to="/logIn"> Already have an account</Link>
          </form>
          
        </div>
    );
};

export default SignIn;