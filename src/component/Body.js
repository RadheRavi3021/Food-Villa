import {restaurantList} from "./config";
import RestaurantCard from "./RestaurantCard"
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
    return restaurants.filter((restaurant) =>
        restaurant?.data.name?.toLowerCase().includes(searchText.toLowerCase()));
}
const Body = () =>{
    // const [restaurants,setRestaurants] = useState(restaurantList)
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchText,setSearchText] = useState('');
    // returns [variable Name, function to update variable]
    useEffect(()=>{
        // API call
       getRestaurants().then(r =>
        console.log(`Received Response: ${r.status}`)
       );
    },[])


    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0)
        return <h1>No match Found !! </h1>

    return allRestaurants.length === 0 ? (<Shimmer/>)
    :(
        <>
            <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchText}
                onChange={(event)=>{
                   setSearchText(event.target.value);
                }}
                />
                <button className="search-btn"
                onClick={()=>
                {
                    // filter the data
                    // update the state -> restaurants
                   const data = filterData(searchText,allRestaurants);
                   setFilteredRestaurants(data);
                }
            }

                > Search </button>

            </div>
        <div className="restaurant-list">
            {
                filteredRestaurants.map((restaurant) =>{
                    return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>;
                })
            }

            {
                /*
            <RestaurantCard {...restaurantList[0].data}/>
            <RestaurantCard {...restaurantList[1].data}/>
            <RestaurantCard {...restaurantList[2].data}/>
            <RestaurantCard {...restaurantList[3].data}/>
            <RestaurantCard {...restaurantList[4].data}/>
            <RestaurantCard {...restaurantList[5].data}/>
                 */
            }
        </div>
        </>
    )
};

export default Body;