import React, {Component} from 'react';

import {Link, Redirect, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import './Login.css'
import Footer from "../../components/Footer/Footer";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            error: '',
            formSubmitting: false,
            user: {
                email: '',
                password: '',
            },
            redirect: props.redirect,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    componentWillMount() {
        let accessToken = cookie.load('accessToken')
        if (accessToken) {
            this.setState({isLoggedIn: true});
        }
    }

    componentDidMount() {
        const {prevLocation} = this.state.redirect.state || {prevLocation: {pathname: '/dashboard'}};
        if (prevLocation && this.state.isLoggedIn) {
            return this.props.history.push(prevLocation);
        }
    }

    handleSubmit(e) {
        console.log('sdfsf')
        e.preventDefault();
        this.setState({formSubmitting: true});
        let userData = this.state.user;
        axios.post(api_routes.user.login(), userData).then(response => {
            return response;
        }).then(json => {
            if (json.data.success) {
                let userData = {
                    id: json.data.id,
                    email: json.data.email,
                    access_token: json.data.access_token,
                };
                let appState = {
                    isLoggedIn: true,
                    user: userData
                };

                cookie.save('accessToken', json.data.access_token, {path: '/', expires: new Date(json.data.expires)});
                this.setState({
                    isLoggedIn: appState.isLoggedIn,
                    user: appState.user,
                    error: ''
                });
                location.reload()
            }
        }).catch(error => {
            let err = error.message;
            this.setState({
                error: err,
                formSubmitting: false
            });
        });
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user, user_email: value
            }
        }));
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user, user_pass: value
            }
        }));
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>

                <div className="container dashboard-container">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src="./images/waving_Shadow 3.png" className="img-fluid login-page-image" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="login-info">Please login to access your Dashbaord</h2>

                            <form onSubmit={this.handleSubmit}>

                            <div className="col-lg-8 mb-4 login-inputs ">

                                <div className="input-group input-group-item">

                                    <input id="email" type="email" name="user_email" placeholder="Email"
                                           className="form-control border-0" onChange={this.handleEmail} required/>
                                    <div className="input-group-prepend">

                                            <span className="input-group-text px-4 border-0">
                                              <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M0.00976562 1.33789C0.00976562 0.785606 0.457481 0.337891 1.00977 0.337891H17C17.5523 0.337891 18 0.785606 18 1.33789V12.6621C18 13.7667 17.1046 14.6621 16 14.6621H2C0.89543 14.6621 0 13.7667 0 12.6621V1.66211C0 1.61449 0.00332856 1.56765 0.00976562 1.5218V1.33789ZM2 3.56165V12.6621H16V3.56199L11.1215 8.4405C9.94992 9.61207 8.05042 9.61207 6.87885 8.4405L2 3.56165ZM3.57232 2.30554H14.428L9.70728 7.02628C9.31675 7.41681 8.68359 7.41681 8.29306 7.02628L3.57232 2.30554Z"
                                                      fill="#0F1114"/>
                                                </svg>
                                            </span>
                                    </div>
                                </div>


                                <div className=" input-group input-group-item">

                                    <input id="password" type="password" name="user_pass" placeholder="Password"
                                           className="form-control  border-0" required onChange={this.handlePassword}/>
                                    <div className="input-group-prepend">

                                            <span className="input-group-text px-4  border-0">
                                              <svg width="24" height="19" viewBox="0 0 24 19" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                                                      fill="#0F1114"/>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M12 0.5C17.5915 0.5 22.2898 4.32432 23.6219 9.5C22.2898 14.6757 17.5915 18.5 12 18.5C6.40848 18.5 1.71018 14.6757 0.378052 9.5C1.71018 4.32432 6.40848 0.5 12 0.5ZM12 16.5C7.52443 16.5 3.73132 13.5581 2.45723 9.5C3.73132 5.44186 7.52443 2.5 12 2.5C16.4756 2.5 20.2687 5.44186 21.5428 9.5C20.2687 13.5581 16.4756 16.5 12 16.5Z"
                                                      fill="#0F1114"/>
                                                </svg>

                                            </span>
                                    </div>
                                </div>


                            </div>


                            <div className="col-lg-8 mb-4 login-inputs ">
                                <p className="text-muted ">
                                    <button
                                       type="submit"
                                       className="btn btn-primary w-100 login-button font-weight-bold">Log in</button>
                                </p>
                            </div>
                            </form>

                        </div>

                        {/*<div className="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12 ">*/}
                        {/*    <h2 className="text-center mb30">Log In To Your Account</h2>*/}
                        {/*    <form onSubmit={this.handleSubmit}>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input id="email" type="email" name="user_email" placeholder="E-mail"*/}
                        {/*                   className="form-control" required onChange={this.handleEmail}/>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input id="password" type="password" name="user_pass" placeholder="Password"*/}
                        {/*                   className="form-control" required onChange={this.handlePassword}/>*/}
                        {/*        </div>*/}
                        {/*        <button disabled={this.state.formSubmitting} type="submit"*/}
                        {/*                name="singlebutton"*/}
                        {/*                className="btn btn-default btn-lg  btn-block mb10"> {this.state.formSubmitting ? "Logging You In..." : "Log In"} </button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>

            </div>

        )
    }
}

export default withRouter(LoginContainer);
