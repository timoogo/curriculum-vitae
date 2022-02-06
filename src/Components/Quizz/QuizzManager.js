import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import Quizz from "./Quizz";
import EndGame from "./EndGame";
import Navigation from "../Navigation";
import { GameStateContext } from "../../Helpers/Contexts";

const QuizzManager = (props) =>{

    const [gameState, setGameState] = useState('menu')
    const [score, setScore] = useState(0)
return (
<>
<h2>Quizz about {props.Quizz.QuizzName} </h2>

<GameStateContext.Provider
        value={{
          gameState,setGameState,
          score, setScore
          
        }}
        >
          {console.log(props.Quizz)}
        {gameState === "menu" && <MainMenu /> }
        {gameState === "quizz" && <Quizz Questions={props.Quizz.Questions} />}
        {gameState === "endgame" && <EndGame />}
        </GameStateContext.Provider>
        {/* <h2>Quizz about {props.Quizz.QuizzName}</h2> */}
        {console.log(props.Quizz.QuizzName)}

</>
)
}
export default QuizzManager