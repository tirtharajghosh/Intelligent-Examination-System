import React, {Component, Fragment} from "react";
import {Button, Card, Col, Nav, Container, Row, FormCheck, Accordion} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
//import Popup from "reactjs-popup";

import Main from "./main";
import Header from "../../layouts/HeaderExam";
import Countdown from "react-countdown";
import Footer from "../../layouts/Footer";


class Exam extends Component{
    constructor(props) {
        super(props);
        this.isFSEnabled = true;
        this.state = {
            currentQuestion:0
        };
        console.log(Date.now());
        this.checkboxhandler = this.checkboxhandler.bind(this);
    }

    checkboxhandler() {
        this.setState({
            enableProceed: !this.state.enableProceed
        });
    }

    // componentDidMount() {
    //     this.exitHandler();
    //     if (document.addEventListener)
    //     {
    //         document.addEventListener('fullscreenchange', this.exitHandler, false);
    //         document.addEventListener('mozfullscreenchange', this.exitHandler, false);
    //         document.addEventListener('MSFullscreenChange', this.exitHandler, false);
    //         document.addEventListener('webkitfullscreenchange', this.exitHandler, false);
    //     }
    // }

    // exitHandler = () => {
    //     this.isFSEnabled = this.checkFullScreen();
    //     if(!this.isFSEnabled){
    //         //this.props.history.push('/abort');
    //         console.log("Normal - "+this.isFSEnabled)
    //     } else {
    //         console.log("Maximized - "+this.isFSEnabled)
    //     }
    // }

    // checkFullScreen = () => {
    //     const doc = window.document;

    //     return !(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement);
    // }

    render() {
        const exam = {
            name: "Data Structure with Java - MCQ",
            totalMarks: 100,
            negativeMarking: 0.25,
            topics: [
                {   "name":"Array",
                    "qa":[
                        {
                            "q":"A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
                            "o1":"An array of 50 numbers",
                            "o2":"An array of 100 numbers",
                            "o3":"An array of 500 numbers",
                            "o4":"An dynamically allocated array of 550 numbers"
                        },
                        {
                            "q":"Who invented C++?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented java?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C++?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented java?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C++?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented java?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C++?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented java?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C++?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        },
                        {
                            "q":"Who invented C?",
                            "o1":"qw",
                            "o2":"er",
                            "o3":"ty",
                            "o4":"ui"
                        }

                    ]},
                {"name":"Linked List",
                    "qa":[]},
                {"name":"Stack and Queue",
                    "qa":[]},
                {"name":"Tree and Graph",
                    "qa":[]},
            ],
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

        const questionButton = (topic) => {
            return topic.qa.map((qa, index)=>
                <Button key={index} className="question-button" variant="primary m-1" size="sm">{index+1}</Button>
            );
        };

        const questionAccordion = exam.topics.map( (topic, inc) =>
            <Card key={inc}>
                <Accordion.Toggle as={Card.Header} eventKey={inc+1}>
                    {topic.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={inc+1}>
                    <Card.Body>
                        { questionButton(topic) }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )

        const tabs = exam.topics.map( (topic, inc) =>
            <Nav.Item key={inc}>
                <Nav.Link href={ "#"+inc}>{ topic.name }</Nav.Link>
            </Nav.Item>
        )


        return (
            <Fragment>
                <Header action={ headerData }/>
                <Container fluid className="exam-panel">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Nav variant="tabs" defaultActiveKey="#0">
                                        { tabs }
                                    </Nav>
                                </Card.Header>
                                <Main topicId={1} questionId={1} />
                            </Card>
                        </Col>
                        <Col xs="3">
                            <Card border="danger">
                                <Card.Body className="text-center">
                                    <Card.Text>
                                        <strong>Time left: <Countdown
                                            date={ Date.now() + 2510000}
                                        /></strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Accordion className="scrollable-accordion" defaultActiveKey={1}>
                                { questionAccordion }
                            </Accordion>
                            <Card className="finish">
                                <Card.Body className="text-center">
                                    <a href="/">Instructions</a>
                                    <br/>
                                    <hr/>
                                    <Button variant="danger">Finish & Submit</Button>
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

export default withRouter(Exam);