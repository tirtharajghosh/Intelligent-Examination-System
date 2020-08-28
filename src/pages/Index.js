import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './Welcome';
import Login from './Login';
import Abort from './Abort';
import '../assets/App.css';
import PreExam from "./PreExam";
import Exam from "./Exam";

class Index extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/abort" component={Abort} />
            <Route path="/preExam" component={PreExam} />
            <Route path="/exam" component={Exam} />
        </Router>
    );
  }
}

export default Index;
