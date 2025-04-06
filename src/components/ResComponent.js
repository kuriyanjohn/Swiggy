import restaurants from "../utils/mockData"
const ResComponent=(props)=>{
    const {restaurants}=props

    const {title,layoutId,costForTwo,avgRating}=restaurants.widgetInfo
    return(
    <div className="res-card">
        <img className="rescardimage" ></img>
        <ul>
        <li>Name:{title}</li>
        <li>Location:{layoutId}</li>
        <li>{costForTwo}</li>
        <li>Rating:{avgRating}</li>

        </ul>
    </div>
    )
}

export default ResComponent