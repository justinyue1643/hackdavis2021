// import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "react-bootstrap/Navbar";
import logo from '../../assets/therapme-logo.png';
import arrow from '../../assets/submit-arrow.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBoard from "../components/answers/AnswerBoard";
import Question from "../components/question/question";
import Background from "../components/background/background";
import Cloud from '../components/clouds/clouds';
import './landing-page.css'

function LandingPage() {
    // const { scrollYProgress } = useViewportScroll();
    // const { width } = useWindowSize();
    // const opacity = useTransform();

    //Need to strip '-' with a finished phone number
    function onkeypressed(e) {
        if(e.key === 'Backspace' || e.key === 'Delete') {
            if(e.target.value[e.target.value.length - 2] === '-') {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
        else {
            if(e.target.value.length === 3) {
                e.target.value += '-';
            }
            else if (e.target.value.length === 7) {
                e.target.value += '-';
            }
        }
    }

    return (
        <div id="home">
            <NavBar bg="">
                <NavBar.Brand href="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt=""
                    />{' '}
                    Therap<span style={{ color: '#FF9900' }}>ME</span>
                </NavBar.Brand>
            </NavBar>
            <Cloud />
            <section className="phone-number-div">
                <h2 className="welcome-text">Get Your First Prompt Today!</h2>
                <Form className="phone-number">
                    <Form.Control className="input box" type="tel" onKeyDown={onkeypressed} pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$' placeholder='202-555-0139' maxLength="12" required></Form.Control>
                    <Button className="submit button" size="lg" type="submit"><img className="submit-arrow" src={arrow} alt=""></img></Button>
                </Form>
            </section>
            <section className="message-board">
                <Question day = "Thursday" date = {"Jan 15th, 2021"}/>
                <AnswerBoard/>
            </section>
           
        </div>
    );
}

export default LandingPage;