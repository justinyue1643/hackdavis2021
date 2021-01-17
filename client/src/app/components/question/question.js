import './question.css';
import Questions from './QuestionSet.js';

const Question = ({day, date}) => {
    const questions = Questions["questions"];

    return (
        <div className = "question-container">
            <div className = "question">
                {date}-{day}: {questions[Math.floor(Math.random() * questions.length)]}
            </div>
        </div>
    );
}

export default Question;