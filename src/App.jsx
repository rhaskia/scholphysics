import './master.css'
import { Quiz, Question } from './Components/Quiz'

function App() {
    const question = new Question("Easy Wave Question",
        "If the wave frequency of a wave is 980hz, how many of them are needed to roughly equal the energy of the sun?",
        ["30", "980", "20 million", "34 quadrillion"], 3);

    return (
        <>
            <Quiz question={question} />
        </>
    )
}

export default App
