import './Answer.css';

const Answer = ({textMessage}) => {
    return (
        <div className = "answer">
            {textMessage}
        </div>
    );
}

export default Answer;