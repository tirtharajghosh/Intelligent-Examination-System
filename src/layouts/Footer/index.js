import React, { Component } from 'react';

export default class Footer extends Component{
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right">
                    <small><b>Version</b> 1.0.0</small>
                </div>
                <small><strong>Copyright © 2020 <a href="https://webircle.com/">Webircle iES</a>.</strong> All rights reserved.
                Designed and Developed By <a href="mailto:tirtharajghosh.ju@gmail.com">Tirtharaj Ghosh</a></small>.
            </footer>
        );
    }
}