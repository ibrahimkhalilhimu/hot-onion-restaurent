import React from 'react';
import logo2 from '../../logo/logo2.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="lastPart pt-5 mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5" >
                        <img  src={logo2} alt=""/>
                    </div>
                    <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6">
                        <ul className="list">
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurent</li>
                        </ul>
                        </div>
                      
                            <div className="col-md-6">
                                <ul className="list">
                                    <li>Get help</li>
                                    <li>Read FAQS</li>
                                    <li>View all cities</li>
                                    <li>Restaurent near me</li>
                                </ul>
                            </div>
                        
                    </div>
                    </div>
                </div>
                <div className="row text-white py-5">
                    <div className="col-md-6 mt-5">
                        <p>CopyRight 2020 online food</p>
                    </div>
                    
                        <div className="col-md-6 mt-5">
                        <div className="row pl-5">
                            <div className="col-md-3">
                                <p>Privacy polici</p>
                            </div>
                            <div className="col-md-3">
                               <p>Team Of Use</p> 
                            </div>
                            <div className="col-md-3">
                                <p>Pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;