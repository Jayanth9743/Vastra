import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, } from "react-router-dom"
import {setCategory} from "./Redux/CatagoriesSlice"
import { BsBagPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { AddBag } from "./Redux/BagSlice";
import { addToFavorites, removeFromFavorites } from "./Redux/FavSlice";




const useQuery = () =>{
  return new URLSearchParams(useLocation().search)
}

const Products = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

const dispatch = useDispatch();
const items = useSelector((state) => state.items.items);
const favorites = useSelector(state => state.favorite.favorites)
const query = useQuery();
const category = query.get('category');


useEffect(()=>{
  if(category){
    dispatch(setCategory(category))
  }
},[category, dispatch]);


const isFavorite = (itemId) => {
  return favorites.some(item => item.id === itemId);
};



const handleFavoriteClick = (item) => {
  if (isFavorite(item.id)) {
    dispatch(removeFromFavorites(item));
    
  } else {
    dispatch(addToFavorites(item));
    
  }
  
};

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mb-20 mt-28">
    <p className="text-2xl font-bold">Products</p>
    <div className="flex flex-wrap items-center justify-center w-full h-full gap-6 mt-5">
      {items.map(info=>(
        <div className="relative flex flex-col items-start gap-2 transition-all duration-500 ease-in-out border rounded-lg shadow-lg justify-evenly w-72 h-96 hover:scale-110 hover:opacity-75"
        onMouseEnter={() => setHoveredItem(info.id)}
        onMouseLeave={() => setHoveredItem(null)}
        key={info.id}>
          <div className="relative w-10/12 mx-auto bg-white h-3/5 ">
            <img src={info.image} alt="" className="object-cover max-w-full max-h-full mx-auto my-auto "/>
            {hoveredItem === info.id && <Link className="absolute top-0 w-16 p-1 ml-24 text-lg text-center text-white bg-blue-500 rounded-md mt-28" to={`/product/${info.id}`}>view</Link>}
          </div>
          <p className="text-lg ml-7">{info.title.slice(0,40)}...</p>
          <p  className="text-blue-600 ml-7">${info.price}</p>
          {hoveredItem === info.id && <BsBagPlus className="absolute top-0 m-3 text-lg transition-all duration-200 ease-in-out cursor-pointer hover:scale-110" onClick={()=>dispatch(AddBag(info))}/>}
          {hoveredItem === info.id && <FaHeart className={`absolute top-0 ml-12 mt-3 ${isFavorite(info.id) ? "text-red-500": "text-gray-300"} text-lg hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer`} onClick={() => handleFavoriteClick(info)}/>}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products
