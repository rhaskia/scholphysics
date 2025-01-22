import { useState } from 'react'

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
    const [chosen, setChosen] = useState(-1);

    function buttonClassName(i) {
        if (chosen == -1) { return ""; }

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
        <div className="quizcomponent">
            <h2> {props.title} </h2>
            <p> Lorem Ipsum </p>
            <div className="quizbuttons"> 
                {question.answers.map(function(obj, i) { 
                    return (
                        <button key={i} 
                            onClick={function() { setChosen(i) } } 
                            className={buttonClassName(i)}>
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
