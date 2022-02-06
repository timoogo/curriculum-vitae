import "../Scss/components/_TitleSection.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const TitleSection = (props) =>{
    return (
        <>
               <div className="titleSection">
                   <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                   <h2>{props.title}</h2>

               </div>
        </>
    )
}
export default TitleSection
