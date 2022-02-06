import { useContext } from "react";
import { GameStateContext } from "../../Helpers/Contexts";
import "../../Scss/components/_QuizzButton.scss"

function Menu() {
  const { gameState, setGameState } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quizz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;