import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <a className="navbar-brand" href="#">
                            <img src="./images/logo.png" className="img-fluid" alt=""/>
                        </a>
                    </div>

                    <div className="col-lg-1">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pay</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Earn</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pool</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Learn</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="col-lg-2">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pkt Node</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pkt Rack</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Install wallet</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">FAQ</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="col-lg-4">
                        <div className="input-group">

                            <h4 className="subscribe-info">Subscribe to newsletter</h4>
                            <div className="flex justify-content-between login-inputs">

                                <input id="email" type="email" placeholder="Your email"
                                       className="form-control border-0" required/>

                                <button
                                    type="submit"
                                    className="btn btn-primary  login-button font-weight-bold subscribe-button">Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <p className="copyright-text">PKT PAL © Copyright, 2020</p>
                    </div>

                </div>


            </div>
        </footer>
    )
};
export default Footer
