import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Row, FormCheck} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import Popup from "reactjs-popup";

import Header from "../../layouts/HeaderExam";
import Footer from "../../layouts/Footer";
import Countdown from "react-countdown";

class PreExam extends Component{
    constructor(props) {
        super(props);
        this.isFSEnabled = true;
        this.state = {
            enableProceed: false
        };
        console.log(Date.now());
        this.checkboxhandler = this.checkboxhandler.bind(this);
    }

    checkboxhandler() {
        this.setState({
            enableProceed: !this.state.enableProceed
        });
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
            //this.props.history.push('/abort');
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
        const exam = {
            name: "Data Structure with Java - MCQ",
            totalMarks: 100,
            negativeMarking: 0.25,
            topics: ["Array","Linked List","Stack and Queue","Tree and Graph"],
            startTime: 1596575954761,
            duration: 60,
            instruction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        };
        const candidate = {
            name: "Tirtharaj Ghosh",
                roll: "0018420024",
                photo: "pp.jpg",
        };
        const headerData = {
            examName: exam.name,
            candidateName: candidate.name,
            candidatePhoto: candidate.photo
        }

        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <Link to="/exam"><Button variant="success">Start Now</Button></Link>;
            } else {
                // Render a countdown
                return <Button variant="warning" readOnly>Start in {("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}</Button>;
            }
        };

        let finalPopup = <Card className="text-center">
            <Card.Header as="h5">Please Confirm before Starting Exam</Card.Header>
            <Card.Body>
                <Card.Text>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Card.Text>
                <Countdown
                    date={exam.startTime}
                    renderer={renderer}
                />

            </Card.Body>
        </Card>;

        return (
            <Fragment>
            <Header action={ headerData }/>
            <Container fluid>
                <Row>
                    <Col>
                        <Card>
                        <Card.Header>
                            <span className="sticky-info pull-left"><i className="fa fa-check-circle text-success" aria-hidden="true"></i> Total Marks: { exam.totalMarks } | <i className="fa fa-times-circle text-danger" aria-hidden="true"></i> Negative Mark: { exam.negativeMarking }</span>
                            <span className="sticky-info pull-right"><i className="fa fa-th-list" aria-hidden="true"></i> Number of Topics: { exam.topics.length } | <i className="fa fa-clock-o" aria-hidden="true"></i> Total Time: { exam.duration } mins</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-danger">Please read the instructions carefully. </Card.Title>
                            <Card.Text className="scrollable-panel bg-light">
                                { exam.instruction }
                                { exam.instruction }
                                { exam.instruction }
                                { exam.instruction }
                                { exam.instruction }
                            </Card.Text>
                            <FormCheck type="checkbox" onChange={ this.checkboxhandler } label="I am given a fully functional computer for this exam and I have read and agree to the Instructions." />


                            <Popup
                                trigger={<Button className="pull-right" variant="warning" disabled={ !this.state.enableProceed }>Yes, I agree.</Button>}
                                modal
                            >
                                { finalPopup }
                            </Popup>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="3">
                        <Card border="danger">
                        <Card.Body>
                            <Card.Text>
                                Time left: { exam.duration }
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
            </Fragment>
        );
    }

}

export default withRouter(PreExam);