import ResComponent from "./ResComponent";
import restaurants from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    //local state variable
     const {listOfRestaurents}=useState([
        {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
            "locality": "Teacher's Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Momos",
              "Chinese",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "veg": true,
        },{
            
                "id": "151656",
                "name": "Dev International",
                "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
                "locality": "khajri road",
                "areaName": "Mohan Nagar",
                "costForTwo": "₹100 for two",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Fast Food",
                  "Beverages"
                ],
                "avgRating": 4.3,
                "veg": false,

        },
        {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Beverages",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
        }
     ])
    return(
    <div className="body">
        <div className="search">
            search
        </div>
        <button className="filter_rating" onClick={()=>{
            const listOfRestaurent=restaurants.filter((res)=> res.info.avgRating > 4.5)     
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