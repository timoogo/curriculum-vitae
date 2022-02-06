import "../Scss/components/_detail.scss";
const Detail = (props) =>{
    return (
        <>
                    <details>
                <summary>{props.the_title} : <span>{props.info}</span> </summary>
                <p>{props.content}</p>
              </details>
        </>
    )
}
export default Detail