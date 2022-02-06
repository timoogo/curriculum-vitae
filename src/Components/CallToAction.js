import { Link } from "react-router-dom";
import "../Scss/components/_CallToAction.scss";
const CallToAction = (props) =>{
    return <Link id="cta" to={props.endpoint}>{props.content}</Link>;

}
export default CallToAction