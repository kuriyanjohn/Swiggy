import resObj from "../utils/mockData"
const ResComponent=(props)=>{
    const {resObj}=props

    const {text,type,link,altText,altTextCta}=resObj?.action
    return(
    <div className="res-card">
        <img className="rescardimage" src={link}></img>
        <ul>
        <li>{text}</li>
        <li>{type}</li>
        <li>{altText}</li>
        <li>{altTextCta}</li>
        </ul>
    </div>
    )
}

export default ResComponent