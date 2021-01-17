// import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "react-bootstrap/Navbar";
import logo from '../../assets/therapme-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBoard from "../components/answers/AnswerBoard";

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
            <section className="phone-number input box">
                <h2>Get Your First Prompt Today!</h2>
                <Form className="phone-number">
                    <Form.Label>
                        PHONE NUMBER
                    </Form.Label>
                    <Form.Control className="input box" type="tel" pattern='[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' placeholder='202-555-0139' required></Form.Control>
                </Form>
                <Button className="submit button">Submit</Button>
            </section>
            <section className="message-board">
                <AnswerBoard/>


            </section>
        </div>
    );
}

export default LandingPage;