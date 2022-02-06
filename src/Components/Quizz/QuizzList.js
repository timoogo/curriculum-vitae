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
        <QuizzManager Quizz={test}></QuizzManager>
        <QuizzManager Quizz={tech}/>
        <QuizzManager Quizz={tvshow}/>
        <QuizzManager Quizz={dev}/>
        </>
    )
}
export default QuizzList