import { useState, useEffect } from 'react';
import { generateQuestionSet } from '../Utils/questiongen.js'

export class Question {
    title;
    question;
    answers;
    correctIdx;
    explanation;
    type;

    constructor(title, question, answers, correctIdx, explanation, type) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctIdx = correctIdx;
        this.explanation = explanation;
        this.type = type;
    }
}

export const Quiz = (props) =>  {
    const questions = generateQuestionSet("waves", 8);
    const [questionIdx, setQuestionIdx] = useState(0);
    const [question, setQuestion] = useState(questions[0]);

    // Update question whenever idx changes
    useEffect(() => {
        setQuestion(questions[questionIdx])
    }, [questionIdx])

    const [chosen, setChosen] = useState(null);

    function nextQuestion() {
        setChosen(null);
        console.log(questionIdx);
        setQuestionIdx(questionIdx + 1);
    };

    return (
        <div className="questions-container flex-c-c">
            <div className="quiz-card flex-dir-column">
                <input className="quiz-progress" value={questionIdx} max={questions.length} type="range"/>
                
                <h2 className="rubik-semibold"> {question.title} </h2>

                <p className="lato"> {question.question} </p>
                
                <QuizInput chosen={chosen} setChosen={setChosen} question={question} />

                <button className="next-button" hidden={chosen === null} onClick={nextQuestion}>Next Question</button>

                <details hidden={chosen === null}>
                    <summary>Explanation</summary>
                    <p>{question.explanation}</p>
                </details>
            </div>
        </div>
    )
}

const QuizInput = (props) => {
    let question = props.question;
    let chosen = props.chosen;
    const [textAnswer, setTextAnswer] = useState(null);

    function buttonClassName(buttonIdx) {
        // null is falsy
        if (chosen === null) { return ""; }
        // always show correct answer
        if (buttonIdx == question.correctIdx) { return "correct"; }

        if (buttonIdx == chosen) { return "incorrect"; }

        return "";
    };
    
    if (question.type == "input") {
        return (
            <div className='quiz-input'>
            <form hidden={textAnswer != null} onSubmit={(e) => { let d = new FormData(e.target); setTextAnswer(d.entries().next().value[1]); e.preventDefault(); }}>
                    <input name="answer"/>
                </form>

                <div className="text-answer-rate" hidden={textAnswer == null}>
                    Your answer: {textAnswer} 
                    <br></br>
                    Answer: {question.answers[0]}
                    <br></br>
                    <button> Correct </button>
                    <button> Incorrect </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="quiz-buttons"> 
                {question.answers.map((questionText, buttonIdx) => { 
                    return (
                        <button 
                            key={buttonIdx} 
                            disabled={chosen != null}
                            onClick={() => { props.setChosen(buttonIdx) } } 
                            className={`${buttonClassName(buttonIdx)} lato`}>

                            {questionText} 
                        </button>
                    );
                })}
            </div>
        );
    }
}
