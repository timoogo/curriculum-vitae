// import { Link } from 'react-router-dom';
import "../Scss/components/MemberInfo.scss";

 const MemberInfo = (props) => {
        return (
            
            <div className="memberInfo">
            <span title="name"id="name">{props.name}</span>
            <span title="age"id="age">{props.age}</span>
            <span title="promotion"id="promotion">{props.promotion}</span>
        </div>
            )
        
    
}
 
 
export default MemberInfo;