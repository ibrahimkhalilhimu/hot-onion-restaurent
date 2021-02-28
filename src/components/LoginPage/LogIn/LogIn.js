import React from 'react';
import './LogIn.css'
import logo from '../../../logo/logo2.png'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const googleButton =()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
        
            var {displayName,email,photoURL} = result.user;
        const singInUser = {name: displayName, email: email, photoURL: photoURL};
        console.log(singInUser);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    }
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
              <button onClick={googleButton} className="googleBtn">  Continue With Google</button>
          </div>
        </div>
    );
};

export default LogIn;