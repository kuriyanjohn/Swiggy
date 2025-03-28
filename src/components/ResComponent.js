import restaurants from "../utils/mockData"
const ResComponent=(props)=>{
    const {restaurants}=props

    const {name,locality,costForTwo,cuisines,avgRating}=restaurants.info
    return(
    <div className="res-card">
        <img className="rescardimage" ></img>
        <ul>
        <li>Name:{name}</li>
        <li>Location:{locality}</li>
        <li>{costForTwo}</li>
        <li>{cuisines.join(',')}</li>
        <li>Rating:{avgRating}</li>

        </ul>
    </div>
    )
}

export default ResComponent