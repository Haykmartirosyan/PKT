import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
        };
        this.logOut = this.logOut.bind(this);
    }

    logOut() {

        axios.get(api_routes.user.logout()).then(response => {
            return response;
        }).then(json => {
            if (json.data.success) {
                let appState = {
                    isLoggedIn: false,
                };
                cookie.remove('accessToken');
                this.setState(appState);
                this.props.history.push('/login');
            }
        }).catch(error => {
            let err = error.message;
            this.setState({
                error: err,
                formSubmitting: false
            });
        });
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./images/logo.png" className="img-fluid" alt=""/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Earn</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pay</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Pool</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Learn</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/dashboard" className="nav-link active">Dashboard</Link>
                            </li>

                            <li className="nav-item ">
                                <Link to="/" className="nav-link">Apps</Link>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M11.7393 21.9966C11.826 21.9988 11.9129 22 12 22C12.0872 22 12.1741 21.9988 12.2607 21.9966C16.3168 21.8928 19.7724 19.3738 21.2427 15.8242C22.2581 13.3674 22.2524 10.588 21.2257 8.13481C20.7231 6.93672 19.994 5.85718 19.0919 4.94979L19.0502 4.90804C18.1474 4.01056 17.0743 3.28429 15.8835 2.78202C13.4106 1.74123 10.6042 1.73933 8.13004 2.77633C6.93121 3.27993 5.85122 4.01042 4.94379 4.91407L4.91413 4.94373C4.00113 5.86054 3.26489 6.95351 2.76084 8.16721C2.27211 9.34662 2.01884 10.6006 2.00101 11.8573C2.00035 11.9047 2.00001 11.9523 2.00001 12C2.00001 12.0506 2.00039 12.1012 2.00114 12.1516C2.06244 16.2743 4.61856 19.7925 8.22694 21.2637C9.35194 21.7213 10.5434 21.9656 11.7393 21.9966ZM9.96778 15.4464L7.09402 18.3202C9.97192 20.5599 14.0281 20.5599 16.906 18.3202L14.0322 15.4464C12.7825 16.1845 11.2175 16.1845 9.96778 15.4464ZM15.4464 14.0322L18.3202 16.906C20.5599 14.0281 20.5599 9.97192 18.3202 7.09402L15.4464 9.96779C16.1845 11.2175 16.1845 12.7825 15.4464 14.0322ZM13.9176 12.5694C13.9227 12.5523 13.9275 12.5351 13.9321 12.5179C14.0226 12.179 14.0226 11.821 13.9321 11.4821C13.8444 11.1537 13.6718 10.8434 13.4142 10.5858C13.1701 10.3417 12.8787 10.1739 12.5694 10.0824C12.5523 10.0773 12.5351 10.0725 12.5179 10.0679C12.179 9.97738 11.821 9.97737 11.4821 10.0679C11.1537 10.1556 10.8434 10.3282 10.5858 10.5858C10.3417 10.8299 10.1739 11.1213 10.0824 11.4306C10.0773 11.4477 10.0725 11.4649 10.0679 11.4821C9.97737 11.821 9.97737 12.179 10.0679 12.5179C10.1556 12.8462 10.3282 13.1566 10.5858 13.4142C10.8299 13.6583 11.1213 13.8261 11.4306 13.9176C11.4477 13.9227 11.4649 13.9275 11.4821 13.9321C11.821 14.0226 12.179 14.0226 12.5179 13.9321C12.8462 13.8444 13.1566 13.6718 13.4142 13.4142C13.6583 13.1701 13.8261 12.8787 13.9176 12.5694ZM9.96779 8.55357C11.2175 7.81548 12.7825 7.81548 14.0322 8.55357L16.906 5.6798C14.0281 3.44007 9.97192 3.44007 7.09402 5.6798L9.96779 8.55357ZM5.6798 16.906C3.44006 14.0281 3.44006 9.97192 5.6798 7.09402L8.55357 9.96779C7.81547 11.2175 7.81547 12.7825 8.55357 14.0322L5.6798 16.906Z"
                                              fill="#0F1114"/>
                                    </svg>
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="notification">
                                        <circle cx="10" cy="10" r="9" fill="#4174DB" stroke="white" strokeWidth="2"/>
                                    </svg>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18.2083 2H23V4H19.7816L17.0128 16.6776H17V17H4V16.7519L1.80678 7.09095L1.46924 6H17.3448L17.9151 3.38852L18.2083 2ZM4.01314 8H16.908L15.3792 15H5.60222L4.01314 8Z"
                                              fill="#0F1114"/>
                                        <path
                                            d="M14 22C12.8954 22 12 21.1046 12 20C12 18.8954 12.8954 18 14 18C15.1046 18 16 18.8954 16 20C16 21.1046 15.1046 22 14 22Z"
                                            fill="#0F1114"/>
                                        <path
                                            d="M5 20C5 21.1046 5.89543 22 7 22C8.10457 22 9 21.1046 9 20C9 18.8954 8.10457 18 7 18C5.89543 18 5 18.8954 5 20Z"
                                            fill="#0F1114"/>
                                    </svg>
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button className="active-btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7ZM10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7Z"
                                              fill="#0F1114"/>
                                        <path
                                            d="M8 15C8 14.4477 8.44772 14 9 14H15C15.5523 14 16 14.4477 16 15V21H18V15C18 13.3431 16.6569 12 15 12H9C7.34315 12 6 13.3431 6 15V21H8V15Z"
                                            fill="#0F1114"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            // <nav className="navbar">
            //     <ul>
            //         {this.state.isLoggedIn ?
            //             <li className="has-sub"><Link to="/dashboard">Dashboard</Link>
            //                 <p>
            //                     <a role="button" onClick={this.logOut}>Logout</a>
            //                 </p>
            //             </li> : ""}
            //         {!this.state.isLoggedIn ?
            //             <li><Link to="/login">Login</Link></li> : ""}
            //     </ul>
            // </nav>
        )
    }
}

export default withRouter(Header)
