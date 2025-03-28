import ResComponent from "./ResComponent";
import restaurants from "../utils/mockData";
const Body=()=>{
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <button className="filter_rating" onClick={()=>{
            const listOfRestaurent=restaurants.filter((res)=>{
                return res.info.avgRating > 4.5
            })     
            console.log(listOfRestaurent);
                   
        }}>filter rating </button>
        <div className="res-container">
        {restaurants.map((restaurent)=>(
            <ResComponent key={restaurent.info.id} restaurants={restaurent} />
        ))}
        </div>
    </div>
    )
}


export default Body;