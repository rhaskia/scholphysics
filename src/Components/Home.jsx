import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  function routeToQuiz(path) {
    navigate("waves");
  }

  return (
    <div className="home-content flex-dir-column flex-sa-c">
      <h1 className="rubik-semibold">What would you like to study today?</h1>

      <ul className="quizzes-container flex-dir-row flex-sa-c">
        <li className="flex-dir-column flex-c-c" onClick={routeToQuiz}>
          <h4 className="lato">Waves</h4>
          <h4>🌊</h4>
        </li>

        <li className="flex-dir-column flex-c-c" onClick={routeToQuiz}>
          <h4 className="lato">Mechanics</h4>
          <h4>🤖</h4>
        </li>

        <li className="flex-dir-column flex-c-c" onClick={routeToQuiz}>
          <h4 className="lato">Electricity</h4>
          <h4>💡</h4>
        </li>
      </ul>

      <div>{/* Empty div to make quiz selection buttons centered*/}</div>
    </div>
  );
};
