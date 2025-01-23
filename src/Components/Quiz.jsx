import { useState } from 'react';

export class Question {
    title;
    question;
    answers;
    correctIdx;
    explanation;

    constructor(title, question, answers, correctIdx, explanation) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctIdx = correctIdx;
        this.explanation = explanation;
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
        <div className="quiz-component">
            <h2> {question.title} </h2>

            <p> {question.question} </p>

            <div className="quiz-buttons"> 
                {question.answers.map((questionText, buttonIdx) => { 
                    return (
                        <button 
                            key={buttonIdx} 
                            onClick={() => {  setChosen(buttonIdx) } } 
                            className={buttonClassName(buttonIdx)}>

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
              <p>{question.explanation}</p>
            </details>
        </div>
    )
}
