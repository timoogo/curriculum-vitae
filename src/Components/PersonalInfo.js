import '../Scss/components/_PersonalInfo.scss'
import TitleSection from "./TitleSection";
import { faAddressBook} from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = (props) => {
    return (

        <div className="basic">
    <TitleSection title="Personal details" icon={faAddressBook}/>
    <div>
        <img src="/images/me.jpeg" />
    </div>
    <span title="name" id="name">Name: {props.name}</span>
    <span title="age" id="age">Age: {props.age}</span>
   <span>Contact me at: <a href={"mailto:" + props.mail} title="mail" id="mail">{props.mail}</a>
       </span>
    <span title="promotion" id="promotion">Promotion: {props.promotion}</span>
</div>
)
}
export default PersonalInfo;