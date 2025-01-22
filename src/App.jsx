import './master.css'
import {Quiz, Question} from './Components/Quiz'

function App() {
  const question = new Question("Example");

  return (
    <>
      <Quiz title={quiz_title}/>
    </>
  )
}

export default App
