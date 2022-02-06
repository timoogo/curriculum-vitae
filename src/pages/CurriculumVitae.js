import "../Scss/components/_ProjectList.scss";
import Navigation from "../Components/Navigation";
import MemberInfoCV from "../Components/MemberInfoCV";
const ProjectList = () => {
    return ( 
            <>
                <Navigation></Navigation>
                <h1>CV</h1>
    
                <MemberInfoCV name="Timothée Gaultier"
                age="22"
                isCV="true" 
                promotion="2022"
                mail="tiimogo@gmail.com"
                />
            </>
     );
}
 
export default ProjectList;