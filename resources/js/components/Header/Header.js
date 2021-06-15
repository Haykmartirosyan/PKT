import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';

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
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Index</Link></li>
                    {this.state.isLoggedIn ?
                        <li className="has-sub"><Link to="/dashboard">Dashboard</Link>
                            <p>
                                <a role="button" onClick={this.logOut}>Logout</a>
                            </p>
                        </li> : ""}
                    {!this.state.isLoggedIn ?
                        <li><Link to="/login">Login</Link></li> : ""}
                </ul>
            </nav>
        )
    }
}

export default withRouter(Header)
