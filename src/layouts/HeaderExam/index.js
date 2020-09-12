import React, { Component } from 'react';
import logo from '../../logo.png'
export default class Header extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.action);
        //this.setHeaderProps();
    }

    render() {
        return (
            <header className="main-header clearfix">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                    <div className="logo" >
                        <img src={logo} alt="logo" />
                        <span className="title">
                            iES
                        </span>
                    </div>
                    <div className="exam-name">
                        <strong>{ this.props.action.examName }</strong>
                    </div>
                    <div className="candidate-details">
                        <img src={process.env.PUBLIC_URL + '/images/' + this.props.action.candidatePhoto}  alt="candidate-pic" height="40px" className="rounded" />
                        <span>
                            { this.props.action.candidateName }
                        </span>
                    </div>
                </nav>
                <div className="clearfix"></div>
            </header>
        );
    }
}