import './AnswerBoard.css';
import TestJSON from './messages';
import Answer from './Answer';
import HorizontalScroll from 'react-scroll-horizontal'

const AnswerRow = ({animation, answers }) => {
    console.log("section: " + answers);
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
    const messages = TestJSON["messages"];

    return (
        <div className="answer-board">
            <AnswerRow animation = "left" answers={messages.slice(0, Math.floor(messages.length / 3))} />
            <AnswerRow animation = "right" answers={messages.slice(Math.floor(messages.length / 3), Math.floor(2 * messages.length / 3))} />
            <AnswerRow animation = "left" answers={messages.slice(Math.floor(2 * messages.length / 3, messages.length))} />
        </div>
    );
}

export default AnswerBoard;