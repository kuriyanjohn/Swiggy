import ResComponent from "./Restaurencard.js";
import resObj from "../utils/mockData.js";
const Body=()=>{
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <div className="res-container">
        {resObj.info.map((restaurent)=>(
            <ResComponent key={restaurent.id} resObj={restaurent} />
        ))}
        </div>
    </div>
    )
}


export default Body;