import ResComponent from "./ResComponent";
import restaurants from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";

const Body=()=>{
    //local state variable
     const [listOfRestaurents,setListOfRestaurents]=useState([])
     const [filteredRestaurent,setfilterdReataurent]=useState([])
     const [SearchText,setSearchText]=useState('')
     useEffect(()=>{
       fetchdata();
     },[])
    const fetchdata=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        console.log('fetch data',json); 

        //optional chaining
        setListOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElement?.infoWithStyle?.restaurants)
        setfilterdReataurent(json?.data?.cards[2]?.card?.card?.gridElement?.infoWithStyle?.restaurants)
    };

    //conditional rendering
    // if(listOfRestaurents.length==0){
    //     return <Shimmer />;
    // }
    return listOfRestaurents.length==0 ? 
    <Shimmer/>
    :( 
    <div className="body">
        <div className="filter">
            <div className="search">
            <input type="text" className="search-box" value={SearchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
                const filteredRestaurent=listOfRestaurents.filter((res)=>{
                    res.data.name.includes(SearchText)
                })
                setfilterdReataurent(filteredRestaurent)
            }}>search</button>
        </div>
        <button className="filter_rating" onClick={()=>{
            const listOfRestaurent=listOfRestaurents.filter((res)=> res.priority > 2)     
            setListOfRestaurents(listOfRestaurent)                    
        }}>filter rating </button>
        </div>
        <div className="res-container">
        {listOfRestaurents.map((restaurent)=>(
            <ResComponent key={restaurent.id} restaurants={restaurent} />
        ))}
        </div> 
    </div>
     )
}


export default Body ;