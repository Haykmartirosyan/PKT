import React, {Component} from 'react'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import './Dashboard.css';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }

    componentWillMount() {
        let token = cookie.load('accessToken');
        if (token) {
            this.setState({isLoggedIn: true});
        } else {
            return this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
                <Footer/>
            </div>
        )
    }
}

export default Home
