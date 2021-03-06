import React, { useState } from "react";
import axios from 'axios';
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
    const [phoneNum, setPhoneNum] = useState("");
    const baseUrl = "http://localhost:8080/https://doitinoneline-twilio.herokuapp.com/";

    function onkeypressed(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (e.target.value[e.target.value.length - 2] === '-') {
                e.target.value = e.target.value.slice(0, -1);
            }
        }
        else {
            if (e.target.value.length === 3) {
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
                <h2 className="welcome-text">Share what's on your mind</h2>
                <Form className="phone-number">
                    <Form.Control
                        className="input box"
                        type="tel"
                        onKeyDown={onkeypressed}
                        pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
                        placeholder='202-555-0139'
                        maxLength="12"
                        onChange={(e) => setPhoneNum(e.target.value)}
                        value={phoneNum}
                        required></Form.Control>
                    <Button className="submit button" size="lg" type="submit"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(phoneNum);
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(phoneNum);

                            setPhoneNum(phoneNum.replace(/-/g, ""));

                            axios.post(baseUrl + "phone-number/add", {"phoneNumber": phoneNum})
                                .then((res) => console.log("Success"))
                                .catch((err) => console.log(err));

                            setPhoneNum("");
                        }}
                    ><img className="submit-arrow" src={arrow} alt=""></img></Button>
                </Form>
            </section>
            <section className="message-board">
                <AnswerBoard />
            </section>
        </div>
    );
}

export default LandingPage;