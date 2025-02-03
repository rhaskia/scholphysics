import './master.css'
import { Quiz } from './Components/Quiz'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './Components/Home';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Placeholder for now */}
          <Route path="waves" element={<Quiz />} />
          <Route path="mechanics" element={<Quiz />} />
          <Route path="electricity" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
