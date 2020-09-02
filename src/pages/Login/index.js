import React, {Component, Fragment} from "react";
import {Button, Card, Form} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

class Login extends Component{
    constructor(props) {
        super(props);
        this.isFSEnabled = true;
        this.state = {
            exam: {
                name : "Data Structure with Java - MCQ"
            }
        };
    }

    componentDidMount() {
        this.exitHandler();
        if (document.addEventListener)
        {
            document.addEventListener('fullscreenchange', this.exitHandler, false);
            document.addEventListener('mozfullscreenchange', this.exitHandler, false);
            document.addEventListener('MSFullscreenChange', this.exitHandler, false);
            document.addEventListener('webkitfullscreenchange', this.exitHandler, false);
        }
    }

    exitHandler = () => {
        this.isFSEnabled = this.checkFullScreen();
        if(!this.isFSEnabled){
            this.props.history.push('/abort');
            console.log("Normal - "+this.isFSEnabled)
        } else {
            console.log("Maximized - "+this.isFSEnabled)
        }
    }

    checkFullScreen = () => {
        const doc = window.document;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container-welcome">
                    <Card className="text-center">
                        <Card.Header><strong>{ this.state.exam.name }</strong></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Link to="/preExam">
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Link>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-muted">Intelligent Examination System</Card.Footer>
                    </Card>
                </div>
                <Footer/>
            </Fragment>
        );
    }

}

export default withRouter(Login);