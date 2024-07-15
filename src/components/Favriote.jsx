import { useDispatch,useSelector } from "react-redux"
import { removeFromFavorites } from "./Redux/FavSlice"
import { BsBagPlus } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddBag } from "./Redux/BagSlice";
import { totalItems } from "./Redux/FavSlice";

const Favriote = () => {
  const favorites = useSelector(state => state.favorite.favorites);
  const total = useSelector(totalItems)
    const dispatch = useDispatch()
    const [hoveredItem, setHoveredItem] = useState(null);

    if (total === 0){
      return(
          <div className="flex flex-col items-center justify-center w-full gap-8 mt-72 ">
              <div className="text-xl font-bold">your favorite is empty</div>
              <div className="text-xl font-bold">click below to view products</div>
              <Link to={'/'}><button className="w-20 p-2 text-white bg-blue-500 rounded-md shadow-md cursor-pointer hover:scale-110">view</button></Link>
          </div>
      )
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-20 mb-20">
    <p className="text-2xl font-bold">favorite</p>
    <div className="flex flex-wrap items-center justify-center w-full h-full gap-6 mt-5">
      {favorites.map(info=>(
        <div className="relative flex flex-col items-start gap-2 transition-all duration-500 ease-in-out border rounded-lg shadow-lg justify-evenly w-72 h-96 hover:scale-110 hover:opacity-75"
        onMouseEnter={() => setHoveredItem(info.id)}
        onMouseLeave={() => setHoveredItem(null)}
        key={info.id}>
          <div  className="relative w-10/12 mx-auto bg-white h-3/5 ">
            <img src={info.image} alt="" className="object-cover max-w-full max-h-full mx-auto my-auto "/>
            {hoveredItem === info.id && <Link className="absolute top-0 w-16 p-1 ml-24 text-lg text-center text-white bg-blue-500 rounded-md mt-28" to={`/product/${info.id}`}>view</Link>}
          </div>
          <p className="text-lg ml-7">{info.title.slice(0,40)}...</p>
          <div className="flex items-center justify-around w-full">
            <p  className="text-blue-600 ml-7">${info.price}</p>
            <button className="p-2 text-white bg-blue-500 rounded-md " onClick={()=>dispatch(removeFromFavorites(info))}>remove</button>
          </div>
          {hoveredItem === info.id && <BsBagPlus className="absolute top-0 m-3 text-lg transition-all duration-200 ease-in-out cursor-pointer hover:scale-110" onClick={()=>dispatch(AddBag(info))}/>}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Favriote
