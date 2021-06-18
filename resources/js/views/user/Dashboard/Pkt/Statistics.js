import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import styles from "../Dashboard.module.css";
import QRCode from "react-qr-code";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {Doughnut, Line} from 'react-chartjs-2';


class Statistics extends Component {

    componentWillMount() {
        let token = cookie.load('accessToken');
        if (token) {
            this.setState({isLoggedIn: true});
        } else {
            return this.props.history.push('/login');
        }
    }

    constructor(props) {

        super(props);
        this.state = {
            isLoggedIn: false,
            startDate: new Date(),
            endDate: new Date(),
            user: {
                email: '',
                password: '',
            },
            DoughnutData: {
                datasets: [{
                    data: [100, 50],
                    backgroundColor: ['#023DB5', '#FFFFFF'],
                }, {},],
                labels: [
                    'Available bandwidth',
                    'Used bandwidth',
                ],
            },

            LineData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        label: '',
                        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 77, 65],
                        fill: true,
                        backgroundColor: "rgba(18, 150, 235, 0.18)",
                        borderColor: "#1296EB"
                    },

                ],
            },
        };
    }

    handleStartChange(date) {
        this.setState({startDate: date});
    }

    handleEndChange(date) {
        this.setState({endDate: date});
    }

    render() {
        return (
            <div className="content">
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 pl-0">
                            <div className={`background-dark-blue p-4 radius-8 h-100 text-white`}>
                                <div className={`pt-3 pb-4 mb-3 border-bottom`}>
                                    <h4>Balance</h4>
                                    <h3>13.4756 PKT</h3>
                                    <p>$478</p>
                                </div>
                                <p>Mined last 24h</p>
                                <h3>732.23 PKT</h3>

                                <div className={`mt-5 text-center`}>
                                    <Link to="/" className={`btn bg-white color-dark-blue font-weight-bold btn-wide`}>
                                        Send PKT</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className={`background-gray p-3 radius-8 h-100`}>
                                <div className={`pt-3 pb-4 mb-3 `}>
                                    <p>PKT Wallet Address</p>

                                    <input type="text" className="p-2 radius-5"
                                           placeholder='pkt1qltkw5gwdaka9c566kqhwuaqa0d87jkywea3hv7'/>
                                    <button className="btn bg-white ml-2 p-2">
                                        <svg width="23" height="23" viewBox="0 0 18 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3 6.5C1.34315 6.5 0 5.15685 0 3.5C0 1.84315 1.34315 0.5 3 0.5C4.65685 0.5 6 1.84315 6 3.5C6 3.62549 5.99229 3.74919 5.97733 3.87063L12.9174 7.34066C13.457 6.82015 14.1911 6.5 15 6.5C16.6569 6.5 18 7.84315 18 9.5C18 11.1569 16.6569 12.5 15 12.5C14.1911 12.5 13.457 12.1798 12.9174 11.6593L5.97733 15.1294C5.99229 15.2508 6 15.3745 6 15.5C6 17.1569 4.65685 18.5 3 18.5C1.34315 18.5 0 17.1569 0 15.5C0 13.8431 1.34315 12.5 3 12.5C3.80891 12.5 4.54305 12.8202 5.08261 13.3407L12.0227 9.87063C12.0077 9.74919 12 9.62549 12 9.5C12 9.37451 12.0077 9.25081 12.0227 9.12937L5.08261 5.65934C4.54305 6.17985 3.80891 6.5 3 6.5Z"
                                                fill="#0F1114"/>
                                        </svg>
                                    </button>
                                    <button className="btn bg-white ml-1 p-2">
                                        <svg width="23" height="23" viewBox="0 0 18 23" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 6.5H4V4.5H10V6.5Z" fill="#0F1114"/>
                                            <path d="M10 10.5H4V8.5H10V10.5Z" fill="#0F1114"/>
                                            <path d="M4 14.5H10V12.5H4V14.5Z" fill="#0F1114"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M0 18.5V0.5H14V4.5H18V22.5H4V18.5H0ZM12 16.5V2.5H2V16.5H12ZM14 6.5V18.5H6V20.5H16V6.5H14Z"
                                                  fill="#0F1114"/>
                                        </svg>
                                    </button>

                                </div>
                                <div className={`pl-4 pr-4`}>
                                    <QRCode value="pkt1qltkw5gwdaka9c566kqhwuaqa0d87jkywea3hv7"/>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 pr-0">
                            <div className={`background-gray p-3 radius-8 h-100`}>
                                <div className={`pt-3  `}>
                                    <p>Available Bandwidth</p>
                                    <h3>1.2 GB</h3>
                                    <Doughnut data={this.state.DoughnutData}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12 mt-4 border radius-8">
                            <div className={`p-3 radius-8 `}>
                                <div className={`pt-2`}>
                                    <div>
                                        <p className="float-left">Mining Income</p>
                                        <select name="" id="" className="float-right bg-white">
                                            <option value="">
                                                Current year
                                            </option>
                                        </select>
                                    </div>

                                    <Line type="area" data={this.state.LineData}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12 mt-4 border">
                            <div className={`p-3 radius-8 `}>
                                <div className={`pt-2`}>
                                    <div className={`pb-3`}>

                                        <Link to="/"
                                              className={`btn text-white font-weight-bold background-black radius-0`}>
                                            Transactions
                                        </Link>

                                        <Link to="/statistics"
                                              className={`btn ml-1 text-black font-weight-bold`}>
                                            Mining income
                                        </Link>
                                    </div>

                                    <div className={`pb-3`}>

                                        <span>Export</span>

                                    </div>

                                    <div className={'container'}>
                                        <div className="row">
                                            <DatePicker className={'background-gray p-2 mr-3  radius-8 '}
                                                        selected={this.state.startDate}
                                                        onChange={(date) => this.handleStartChange(date)}/>

                                            <DatePicker className={'background-gray p-2  radius-8'}
                                                        selected={this.state.endDate}
                                                        onChange={(date) => this.handleEndChange(date)}/>

                                            <div className={'col-12 col-md-2 col-lg-2'}>
                                                <select name=""
                                                        className={'form-group background-gray p-2 radius-8 w-100'}
                                                        id="">
                                                    <option value="">Transaction type</option>
                                                </select>
                                            </div>

                                            <div className={'col-12 col-md-2 col-lg-2'}>
                                                <select name=""
                                                        className={'form-group background-gray p-2 radius-8 w-100'}
                                                        id="">
                                                    <option value="">Device</option>
                                                </select>
                                            </div>

                                            <div className={'col-12 col-md-3 col-lg-3 text-right'}>
                                                <button
                                                    className="radius-8 background-dark-blue text-white font-weight-bold p-2">View
                                                    in Block Explorer
                                                </button>
                                            </div>

                                        </div>


                                    </div>


                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th className={'border-0'}>Date</th>
                                            <th className={'border-0'}>Type</th>
                                            <th className={'border-0'}>Wallet address</th>
                                            <th className={'border-0'}>Recipient's name</th>
                                            <th className={'border-0'}>Amount</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                            <td className={'border-0'}>1 June, 2020</td>
                                            <td className={'border-0'}>Sent</td>
                                            <td className={'border-0'}>0x310E6721e8fa5BE1AD032ADbAAf120</td>
                                            <td className={'border-0'}>Amazon</td>
                                            <td className={'border-0'}>+ 20,254.20 PKT</td>
                                            <th className={'border-0'} data-toggle="collapse" data-target="#demo1">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.2969 1.48633L9.79688 9.98633L1.29687 1.48633"
                                                          stroke="#141414" strokeWidth="2"/>
                                                </svg>
                                            </th>
                                        </tr>

                                        <tr>
                                            <td colSpan="12" className="hiddenRow background-gray radius-8">
                                                <div className="accordian-body collapse  p-2" id="demo1">


                                                    <div className={'container'}>
                                                        <div className="row">

                                                            <div className={'col-12 col-md-6 col-lg-6'}>
                                                                From
                                                            </div>
                                                            <div className={'col-12 col-md-6 col-lg-6'}>
                                                                To
                                                            </div>

                                                            <div className={'col-12 col-md-5 col-lg-5'}>

                                                                <div className={'bg-white p-3 radius-8 border flex justify-content-between'}>

                                                                    <span >0x310E6721e8fa5BE1AD032...</span>
                                                                    <span >30, 211.76 PKT</span>

                                                                </div>
                                                            </div>

                                                            <div className={'col-12 col-md-1 col-lg-1 flex justify-content-center'}>
                                                                <svg width="24" height="10" viewBox="0 0 24 10"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M23.0676 5.07194L18.8178 0.908203L17.406 2.30081L19.2414 4.09904L0.932347 4.09707L0.932129 6.0632L19.2368 6.06516L17.4153 7.86183L18.8319 9.24974L23.0676 5.07194Z"
                                                                        fill="#141414"/>
                                                                </svg>

                                                            </div>


                                                            <div className={'col-12 col-md-5 col-lg-5'}>

                                                                <div className={'bg-white p-3 radius-8 border flex justify-content-between'}>

                                                                    <span >0x310E6721e8fa5BE1AD032...</span>
                                                                    <span >30, 211.76 PKT</span>

                                                                </div>
                                                            </div>

                                                            <div className={'col-12 col-md-5 col-lg-5 mt-3'}>

                                                                <Link to="/statistics"
                                                                      className={'btn text-black underline pl-0'}>
                                                                    View transaction in Block Explorer
                                                                </Link>


                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        )
    }
}

export default withRouter(Statistics)
