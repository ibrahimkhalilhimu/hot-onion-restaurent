import React from 'react';
import './LogIn.css'
import logo from '../../logo/logo2.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="text-center login">
          <img src={logo} alt=""/>  
          <form className="pt-5">
            
              <input type="email" name="" id="input" placeholder="Email"/><br/><br/>
              <input type="password" name="" id="input" placeholder="Password"/><br/><br/>
              <input className="submitBtn " type="submit" value="LogIn"/><br/><br/>
          </form>
          <h6>Dont't have an account?<Link to="/signIn">create new account</Link></h6>
          <div className="pt-3">
              <button className="googleBtn">Continue With Google</button>
          </div>
        </div>
    );
};

export default LogIn;