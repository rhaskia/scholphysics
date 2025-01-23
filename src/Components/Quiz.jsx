import { useState } from 'react';

export class Question {
    title;
    question;
    answers;
    correctIdx;

    constructor(title, question, answers, correctIdx) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctIdx = correctIdx;
    }
}

export const Quiz = (props) =>  {
    const question = props.question;
    const [chosen, setChosen] = useState(null);

    function buttonClassName(buttonIdx) {
        // null is falsy
        if (chosen === null) { return ""; }

        if (buttonIdx == chosen) {
            if (chosen == question.correctIdx) {
                return "correct";
            } else {
                return "incorrect";
            }
        }
    };

    return (
        <div className="questions-container flex-c-c">
            <div className="quiz-card flex-dir-column">
                <h2 className="rubik-semibold"> {question.title} </h2>

                <p className="lato"> {question.question} </p>

                <div className="quiz-buttons"> 
                    {question.answers.map((questionText, buttonIdx) => { 
                        return (
                            <button 
                                key={buttonIdx} 
                                onClick={() => {  setChosen(buttonIdx) } } 
                                className={`${buttonClassName(buttonIdx)} lato`}>

                                {questionText} 
                            </button>
                        );
                    })}
                </div>

                <p>
                    {chosen}
                </p>

                <details hidden={chosen === null}>
                <summary>Explanation</summary>
                <p>Lorem ipsum</p>
                </details>
            </div>
        </div>
    )
}
