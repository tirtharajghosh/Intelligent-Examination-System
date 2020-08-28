import React, {Component, Fragment} from "react";
import {Button, Card} from "react-bootstrap";
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default class Welcome extends Component{
    constructor() {
        super();
        this.state = {
            exam: {
                name : "Data Structure with Java - MCQ"
            }
        };
    }
    render() {
        return (
            <Fragment>
            <Header/>
                <div className="container-welcome">
                    <Card className="text-center">
                        <Card.Header><strong>{ this.state.exam.name }</strong></Card.Header>
                        <Card.Body>
                            <Card.Title>Welcome</Card.Title>
                            <Card.Text>
                                Click the start button to experience the full-screen mode.
                            </Card.Text>
                                <Button variant="primary" onClick={(e) => {
                                    document.body.requestFullscreen().then(r =>
                                        this.props.history.push('/login')
                                    );
                                }} >Start</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Intelli Examination System</Card.Footer>
                    </Card>
                </div>
            <Footer/>
            </Fragment>
        );
    }

}