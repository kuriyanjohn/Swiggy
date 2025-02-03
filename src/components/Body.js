import ResComponent from "./Restaurencard.js";
import resObj from "../utils/mockData.js";
const Body=()=>{
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <div className="res-container">
        <ResComponent 
        name="food"
        type="fastfood"
        rating="4.4 stars"
        time="30 mints"/>
        <ResComponent 
        name="biriyani"
        type="meal"
        rating="4.4 stars"
        time="30 mints"/>
        </div>
    </div>
    )
}


export default Body;