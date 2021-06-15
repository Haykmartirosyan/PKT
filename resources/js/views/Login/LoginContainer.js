import React, {Component} from 'react';

import {Link, Redirect, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import './Login.css'
import Footer from "../../components/Footer/Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


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
                            <img src="./images/waving_Shadow 3.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="login-info">Please login to access your Dashbaord</h2>
                            <form action="#">

                                <div className="input-group col-lg-6 mb-4">

                                    <input id="email" type="text" name="email" placeholder="Email"
                                           className="form-control bg-white border-right-0 border-md"/>
                                    <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-left-0">
                                               <FontAwesomeIcon icon={["fal", "coffee"]}/>
                                            </span>
                                    </div>
                                </div>


                                <div className="w-100">
                                    <p className="text-muted font-weight-bold">
                                        <a href="#"
                                           className="btn btn-primary">Login</a>
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
