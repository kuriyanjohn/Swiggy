import ResComponent from "./ResComponent";
import restaurants from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    //local state variable
     const [listOfRestaurents,setListOfRestaurents]=useState(restaurants)
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <button className="filter_rating" onClick={()=>{
            const listOfRestaurent=listOfRestaurents.filter((res)=> res.info.avgRating > 4.2)     
            console.log(listOfRestaurent);
            setListOfRestaurents(listOfRestaurent)
                    
        }}>filter rating </button>
        <div className="res-container">
        {listOfRestaurents.map((restaurent)=>(
            <ResComponent key={restaurent.id} restaurants={restaurent} />
        ))}
        </div>
    </div>
    )
}


export default Body ;