import { useState, useContext } from "react"
import { Questions } from "../../Helpers/QuizzQandA"
import { GameStateContext } from "../../Helpers/Contexts"
import "../../Scss/components/_QuizzButton.scss"
import "../../Scss/components/_QuizzPrompt.scss"
import "../../Scss/components/_QuizzAnwserLayout.scss"


export default function Quizz (props) {




    const {score, setScore, setGameState} = useContext(GameStateContext)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const SubmitAnwser  = () =>{
        if(props.Questions[currentQuestion].answer == optionChosen) {
            setScore(score +1)
        }
        console.log(score)
        setCurrentQuestion(currentQuestion + 1)
    }
    const SeeResult = () =>{
        if(props.Questions[currentQuestion].answer == optionChosen) {
            setScore(score +1)
        }
        setGameState("endgame")  
    }
    return (
        <div className="quizz">
            <h2>{props.Questions[currentQuestion].question}</h2>
            <div className="options">
            
               

            

                <button onClick={()=> setOptionChosen("1")}>{props.Questions[currentQuestion].option1}</button>
                <button onClick={()=> setOptionChosen("2")}>{props.Questions[currentQuestion].option2}</button>
                <button onClick={()=> setOptionChosen("3")}>{props.Questions[currentQuestion].option3}</button>
                <button onClick={()=> setOptionChosen("4")}>{props.Questions[currentQuestion].option4}</button>
        
           
            </div>
            {currentQuestion == props.Questions.length -1 ? (
                <button onClick={SeeResult}>See result</button>
            ): (
            <button className="next" onClick={SubmitAnwser} >Next question</button>
            )}
        </div>
    )
}