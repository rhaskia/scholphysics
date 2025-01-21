import "./CSS/quiz.css"

const Quiz = (props) =>  {
    return (
        <div className="quizcomponent">
            <h2> {props.title} </h2>
            <p> Lorem Ipsum </p>
            <div className="quizbuttons"> 
                <button> Answer </button>
                <button> Answer </button>
                <button> Answer </button>
                <button> Answer </button>
                <button> Answer </button>
                <button> Answer </button>
            </div>
            <details>
              <summary>Explanation</summary>
              <p>Lorem ipsum</p>
            </details>
        </div>
    )
}

export default Quiz;
