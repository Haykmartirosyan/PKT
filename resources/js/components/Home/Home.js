import React, {Component} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
