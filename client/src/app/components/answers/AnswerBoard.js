import './AnswerBoard.css';
import TestJSON from './messages';
import Answer from './Answer';

const AnswerRow = ({ answers }) => {
    console.log("section: " + answers);
    return answers.map((answer, index) => {
        return <Answer key = {index} textMessage={answer} />
    });
}

const AnswerBoard = () => {
    const messages = TestJSON["messages"];

    return (
        <div className="answer-board">
            <AnswerRow className = "answer-row" answers={messages.slice(0, Math.floor(messages.length / 3))} />
            <AnswerRow className = "answer-row" answers={messages.slice(Math.floor(messages.length / 3), Math.floor(2 * messages.length / 3))} />
            <AnswerRow className = "answer-row" answers={messages.slice(Math.floor(2 * messages.length / 3, messages.length))} />

        </div>
    );
}

export default AnswerBoard;