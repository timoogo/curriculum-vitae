import "../Scss/components/_SkillBar.scss"

const SkillBar = (props) =>{
    return(
    <>
        <div className="skill">
        <label htmlFor={props.skillName}>{props.skillName}</label>
        <progress id={props.skillName} max="100" value={props.skillValue}>
           </progress>
           <span>{props.skillValue} % </span>
        </div>
    </>)
}
export default SkillBar;