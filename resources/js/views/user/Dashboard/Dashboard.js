import React, {Component} from 'react'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './Dashboard.module.css';
import {Link} from "react-router-dom";


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
            return this.props.history.push('/dashboard');
        } else {
            return this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className={`background-dark-blue p-4 radius-8 h-100 text-white`}>
                                <div className={`pt-3 pb-4 mb-3 border-bottom`}>
                                    <h4>Balance</h4>
                                    <h3>0.00 PKT</h3>
                                </div>
                                <p>Attach the wallet</p>
                                <div className={`mt-5 text-center`}>
                                    <Link to="/" className={`btn bg-white color-dark-blue font-weight-bold btn-wide`}>Add wallet</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 text-center">
                            <img className={styles.dashboardDeviceImg} src="./images/waving_Shadow 3.png" alt=""/>
                            <h2 className={`font-weight-bold mb-5 ${styles.dashboardNoDevicesText}`}>You have no devices</h2>
                            <Link to="/" className={`btn btn-primary login-button font-weight-bold btn-wide`}>Buy PKT Rack</Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home
