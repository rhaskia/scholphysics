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

    function buttonClassName(i) {
        // null is falsy
        if (!chosen) { return ""; }

        if (i == chosen) {
            if (chosen == question.correctIdx) {
                return "correct";
            } else {
                return "incorrect";
            }
        }

        return "";
    };

    return (
        <div className="quiz-component">
            <h2> {question.title} </h2>

            <p> {question.question} </p>

            <div className="quiz-buttons"> 
                {question.answers.map(function(obj, i) { 
                    return (
                        <button key={i} 
                            onClick={() => {  setChosen(i) } } 
                            className={() => { buttonClassName(i) }}>
                            {obj} 
                        </button>
                    );
                })}
            </div>

            <p>
                {chosen}
            </p>

            <details hidden={chosen == -1}>
              <summary>Explanation</summary>
              <p>Lorem ipsum</p>
            </details>
        </div>
    )
}
