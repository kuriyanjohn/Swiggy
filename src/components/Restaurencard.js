import resObj from "../utils/mockData"
const ResComponent=(props)=>{
    const {resObj}=props

    const {text,}=resObj.info.action
    return(
    <div className="res-card">
        <img className="rescardimage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"></img>
        <ul>
        <li>{text}</li>
        <li>{type}</li>
        <li>{rating}</li>
        <li>{time}</li>
        </ul>
    </div>
    )
}

export default ResComponent