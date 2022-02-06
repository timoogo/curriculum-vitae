
const ProjectDetails = (props) =>{
    return (
    <>

     <h2>{props.projectName}</h2>
     <p>{props.projectDescription}</p>
     <a href={"https://github.com/timoogo/" + props.github_repo}>Github {props.projectName}</a>
     { //Check if hasVideo
        (props.hasVideo)
          ? <div>
               <video>
                <source src={"/videos/" + props.github_repo+ "/"+props.projectName+".mp4"}/>
              </video> </div> 
          : <div> No video for this project </div> 
      }
     { //Check if hasImage
        (props.hasImg)
          ? <div>
             
                <img src={"/images/" + props.github_repo+ "/"+props.projectName+".jpeg"}/>
              </div> 
          : <div> Everything in the world is fine </div> 
      }
           { //Check if hasImage
        (props.hasMoreData)
          ? <div>
             <p>{props.MoreData}</p>
             <a target="_blank" href={props.url}>Lien</a>
                
              </div> 
          : <div> Everything in the world is fine </div> 
      }
    </>
    )
}
export default ProjectDetails