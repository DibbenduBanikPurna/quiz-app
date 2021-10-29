import React, { useState } from 'react';
import '../../assets/style.css'

const Card = ({ question, selected }) => {
    const [answer, setAnswer] = useState(question.answers)


    return (
        <div className="questionBox">
            <div className="question">{question.question}</div>
            {answer.map((text, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}
                >
                    {text}
                </button>
            ))}


        </div>
    );
};

export default Card;