import React, {Component, Fragment} from "react";
import {Alert, Card} from "react-bootstrap";
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default class Welcome extends Component{
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container-welcome">
                    <Card className="text-center">
                        <Card.Header><strong>Intelligent Examination System</strong></Card.Header>
                        <Card.Body>
                            <Card.Title>Have a good day!</Card.Title>
                            <Alert variant={"danger"}>
                                You're banned.
                            </Alert>
                        </Card.Body>
                        <Card.Footer className="text-muted">Warning: Exiting from full-screen mode will end your examination.</Card.Footer>
                    </Card>
                </div>
                <Footer/>
            </Fragment>
        );
    }

}