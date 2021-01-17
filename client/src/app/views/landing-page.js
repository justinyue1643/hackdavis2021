// import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "react-bootstrap/Navbar";
import logo from '../../assets/therapme-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBoard from "../components/answers/AnswerBoard";
import Question from "../components/question/question";
import Background from "../components/background/background";
import Cloud from '../components/clouds/clouds';

function LandingPage() {
    // const { scrollYProgress } = useViewportScroll();
    // const { width } = useWindowSize();
    // const opacity = useTransform();

    //Need clouds as a component?

    return (
        <div id="home">
            <NavBar bg="">
                <NavBar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />{' '}
                    Therap<span style={{ color: 'blue' }}>ME</span>
                </NavBar.Brand>
            </NavBar>
            <Cloud />
            <section className="phone-number-div">
                <h2>Get Your First Prompt Today!</h2>
                <Form className="phone-number">
                    <Form.Label>
                        PHONE NUMBER
                    </Form.Label>
                    <Form.Control className="input box" type="tel" pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' placeholder='202-555-0139' required></Form.Control>
                    <Button className="submit button" size="lg" type="submit">Submit</Button>
                </Form>
            </section>
            <section className="message-board">
                <Question day = "Thursday" date = {"Jan 15th, 2021"}/>
                <AnswerBoard/>
            </section>
            <Background/>
        </div>
    );
}

export default LandingPage;