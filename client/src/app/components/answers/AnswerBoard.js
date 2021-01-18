import './AnswerBoard.css';
import { useState, useEffect } from 'react';
import TestJSON from './messages';
import Answer from './Answer';
import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios';
import Question from '../question/question'
const AnswerRow = ({animation, answers }) => {
    return (
        <div className = {animation == "left" ? "answer-row-left" : "answer-row-right"}>
            {
                answers.map((answer, index) => {
                    return <Answer key={index} textMessage={answer} />
                })
            }
        </div>
    );
}

const AnswerBoard = () => {
    const baseUrl = "http://localhost:8080/https://doitinoneline-twilio.herokuapp.com/";
    const messages = TestJSON["messages"];
    const [serverMessages, setServerMessages] = useState([]);

    function getServerMessages() {
        
    }

    useEffect(() => {
        axios.get(baseUrl + "text")
            .then((results) => {
                var data = results.data;
                for (let i = 0; i < data.length; i++) {
                    serverMessages.push(data[i].response);
                    setServerMessages([...serverMessages, data[i].response])
                }
                console.log(serverMessages);
            })
            .catch((err) => console.log(err));
    },[])

    return (
        <div className="answer-board">
            <Question pDate = {0}/>
            <AnswerRow animation = "left" answers={serverMessages.slice(0, Math.floor(serverMessages.length / 3))} />
            <Question pDate = {2}/>
            <AnswerRow animation = "right" answers={serverMessages.slice(Math.floor(serverMessages.length / 3), Math.floor(2 * serverMessages.length / 3))} />
            <Question pDate = {3}/>
            <AnswerRow animation = "left" answers={serverMessages.slice(Math.floor(2 * serverMessages.length / 3, serverMessages.length))} />
        </div>
    );
}

export default AnswerBoard;