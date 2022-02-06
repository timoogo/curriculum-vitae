import QuizzManager from "./QuizzManager"
import  * as tech from "../../Helpers/Tech";
import * as test from "../../Helpers/QuizzQandA";
import * as dev from "../../Helpers/Dev";
import * as tvshow from "../../Helpers/TVShow";
import Navigation from "../Navigation";
const QuizzList =() =>{
    return (
        <>
        <Navigation/>
            <div className="quizzlist">
                <div className="theQuizz">
                <QuizzManager Quizz={test}></QuizzManager>
                </div>
                <div className="theQuizz">
                <QuizzManager Quizz={tech}/>
                </div>
                <div className="theQuizz">
                <QuizzManager Quizz={tvshow}/>

                </div>
                <div className="theQuizz">
                <QuizzManager Quizz={dev}/>

                </div>
           
       
            </div>
        </>
    )
}
export default QuizzList