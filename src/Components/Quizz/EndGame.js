import { useContext } from "react";
import { GameStateContext } from "../../Helpers/Contexts";
import "../../Scss/components/_QuizzButton.scss"

import { Questions } from "../../Helpers/QuizzQandA";

export default function EndGame () {
    const {score, setScore, setGameState } = useContext(GameStateContext)
    const finalScore = `${score} / ${Questions.length}`
    const restartTheQuizz = () => {
        setScore(0)
        setGameState("menu")
    }
    return (
        <div>
            <h2>Here your final score :  {finalScore}  </h2>
         
            <button onClick={restartTheQuizz}>Restart the quizz</button>
        </div>
    )
}