import { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios';
import './question.css';
import Questions from './QuestionSet.js';

var datesDB = []
var questionsDB = []

const Question = ({pDate}) => {
    const baseUrl = "http://localhost:8080/https://doitinoneline-twilio.herokuapp.com/";
    const questions = Questions["questions"];
    const [serverMessages, setServerMessages] = useState([]);
    let data
    useEffect(() => {
        axios.get(baseUrl + "question")
            .then((results) => {
                var data = results.data;
                for (let i = 0; i < data.length; i++) {
                    serverMessages.push(data[i].response);
                    setServerMessages([...serverMessages, data[i].response])
                    datesDB.push(data[i]["createdAt"].substring(0,10))
                    questionsDB.push(data[i]["question"])
                }
            })
            .catch((err) => console.log(err));
    },[])

    console.log(datesDB)
    return (
        <div className = "question-container">
            <div className = "question">
                {datesDB[pDate]}: {questionsDB[pDate]}
            </div>
        </div>
    );
}

export default Question;