import React, { Component } from 'react';
import logo from '../../logo.png'
export default class Header extends Component{
    render() {
        return (
            <header className="main-header">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                    <a className="logo" href="/">
                        <img src={logo} alt="logo" />
                        <span className="title">
                            iES
                        </span>
                    </a>

                </nav>

            </header>
        );
    }
}