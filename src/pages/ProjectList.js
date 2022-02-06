import ProjectDetails from "../Components/ProjectDetails"
import Navigation from "../Components/Navigation"
import "../Scss/components/_detail.scss"
const ProjectList = () =>{
        return (
                <>
                <Navigation></Navigation>
                <details>
                        <summary>Pool</summary>
                        <ProjectDetails github_repo="pool" projectName="pool" projectDescription="A interractive pool which simulate a live game" hasVideo="true"/>
                </details>
                <details>
                        <summary>28 days of 28DayOfFrontEnd</summary>
                        <ProjectDetails github_repo="timogo__theme" projectName="28daysOfFrontend" projectDescription="28DayOfFrontEnd" hasVideo="false" hasImg="true" hasMoreData="true" MoreData="Projet de communication et de développement" url="https://www.instagram.com/timothee__gaultier/"/>
                </details>
                </>
        )
}
export default ProjectList