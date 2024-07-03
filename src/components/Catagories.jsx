import {recommendation} from "./Data"
import { BsBagPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { AddBag } from "./Redux/BagSlice";
import { addToFavorites, removeFromFavorites } from "./Redux/FavSlice";


const Catagories = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleCategory = (category) =>{
    navigate(`/products?category=${category}`)
  }

  const favorites = useSelector(state => state.favorite.favorites)

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
    <>
      <div className="flex flex-col items-center justify-center w-full mt-20 mb-14">
      
      <div className="flex flex-col items-center justify-center w-full h-full ">
          <p className="text-3xl font-medium">Catagories</p>
          <div className="flex flex-wrap items-center w-full gap-8 mt-10 mb-5 justify-evenly">
              
                <div  className="relative transition-all duration-500 ease-in-out bg-cover rounded-lg cursor-pointer w-72 h-44 hover:scale-110" style={{backgroundImage:`url(https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Male-Cloth_fyyrzb.jpg)`}} onClick={()=>handleCategory('men')}>
                  <h2 className="absolute bottom-0 right-0 mr-1 text-xl font-medium text-white ">men</h2>
                </div>
                <div  className="relative transition-all duration-500 ease-in-out bg-cover rounded-lg cursor-pointer w-72 h-44 hover:scale-110" style={{backgroundImage:`url(https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg)`}}  onClick={()=>handleCategory('women')}>
                  <h2 className="absolute bottom-0 right-0 mr-1 text-xl font-medium text-white ">women</h2>
                </div>
                <div  className="relative transition-all duration-500 ease-in-out bg-cover rounded-lg cursor-pointer w-72 h-44 hover:scale-110" style={{backgroundImage:`url(https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}  onClick={()=>handleCategory('kids')}>
                  <h2 className="absolute bottom-0 right-0 mr-1 text-xl font-medium text-white ">kids</h2>
                </div>
                <div  className="relative transition-all duration-500 ease-in-out bg-cover rounded-lg cursor-pointer w-72 h-44 hover:scale-110" style={{backgroundImage:`url(https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/model-jwellery_qlcjog.jpg)`}}  onClick={()=>handleCategory('jewelery')}>
                  <h2 className="absolute bottom-0 right-0 mr-1 text-xl font-medium text-white ">jewelery</h2>
                </div>
              
          </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full mt-14">
        <p className="text-2xl font-medium">Featured Products</p>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-6 mt-5">
          {recommendation.map(info=>(
            <div  className="relative flex flex-col items-start gap-2 transition-all duration-500 ease-in-out border rounded-lg shadow-lg justify-evenly w-72 h-96 hover:scale-110 hover:opacity-75 "
                onMouseEnter={() => setHoveredItem(info.id)}
                onMouseLeave={() => setHoveredItem(null)}
                key={info.id}>
                  <div className="relative w-10/12 mx-auto bg-white h-3/5 ">
                    <img src={info.image} alt="" className="object-cover max-w-full max-h-full mx-auto my-auto "/>
                    {hoveredItem === info.id && <Link className="absolute top-0 p-2 ml-24 text-lg bg-gray-300 rounded-md mt-28" to={`/product/${info.id}`}>view</Link>}
                  </div>
                  <p className="text-lg ml-7">{info.title.slice(0,40)}...</p>
                  <p  className="text-blue-600 ml-7">${info.price}</p>
                  {hoveredItem === info.id && <BsBagPlus className="absolute top-0 m-3 text-lg cursor-pointer hover:scale-110" onClick={()=>dispatch(AddBag(info))}/>}
                  {hoveredItem === info.id && <FaHeart className={`absolute top-0 ml-12 mt-3 ${isFavorite(info.id) ? "text-red-500 cursor-pointer": "text-gray-300"} text-lg hover:scale-110 transition-all ease-in-out duration-200`} onClick={() => handleFavoriteClick(info)}/>}              

              </div>
          ))}
        </div>
      </div>
      

  </div>
    </>
  )
}

export default Catagories
