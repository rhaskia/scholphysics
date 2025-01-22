import { useState } from 'react';

class Question {
    constructor(title, question, answers, correctIdx) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctIdx = correctIdx;
    }
}

const Quiz = (props) =>  {
    // move to props
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
            <h2> {props.title} </h2>

            <p> Lorem Ipsum </p>

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

export default Quiz;
