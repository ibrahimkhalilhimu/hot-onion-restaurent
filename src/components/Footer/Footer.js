import React from 'react';
import logo2 from '../../logo/logo2.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="lastPart pt-5 mt-5">
            <div className="container  pt-5">
                <div className="row">
                    <div className="col-md-6" >
                        <img  src={logo2} alt=""/>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurent</li>
                        </ul>
                        </div>
                      
                            <div className="col-md-3">
                                <ul className="list">
                                    <li>Get help</li>
                                    <li>Read FAQS</li>
                                    <li>View all cities</li>
                                    <li>Restaurent near me</li>
                                </ul>
                            </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Copyright &copy;  2020 Online Food </small>
                    <ul className="list-inline ">
                        <li className="list-inline-item ml-3"><a href="" className="text-white">Privacy Policy.</a></li>
                        <li className="list-inline-item  ml-3"><a href="" className="text-white">Terms of Use</a></li>
                        <li className="list-inline-item  ml-3"><a href="" className="text-white">Pricing</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Footer;