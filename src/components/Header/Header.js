import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import header from '../../logo/logo2.png'
;
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="home"><img src={header} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto" >
      <Link className="nav-link  navItem" to="icon"> 
      <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <Link className="nav-link navItem" to="login">LogIn</Link>
      <Link className="nav-link navItem" id="signIn" to="signIn">SignIn</Link>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
