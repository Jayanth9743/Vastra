import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  // const totalQuantity = useSelector((state)=>state.bag.totalQuantity)
  return (
    <>
        <nav className="fixed top-0 flex justify-around items-center w-full bg-white md:justify-between z-10 shadow-xl">
        <Link to={"/"} className="text-2xl font-bold m-2  md:ml-16 p-2">VASTRA</Link>

        <ul className="hidden justify-around  items-center w-2/6 h-full md:flex font-medium m-1">
            <NavLink activeClassName=' bg-slate-400' to={"/bag"} className="flex justify-center items-center gap-2 ">bag <MdOutlineShoppingBag className="text-2xl mb-2"/>
            </NavLink>
            <NavLink to={'/fav'} className="flex justify-center items-center gap-2">favorite <MdFavoriteBorder className="text-2xl mb-2"/></NavLink>
            <li className="flex justify-center items-center gap-2 cursor-pointer">profile <CgProfile className="text-2xl mb-2"/></li>
            
        </ul>

        </nav>
        
        <div className="fixed bottom-0 flex  items-center w-full bg-white z-20 md:hidden shadow-top">
            <ul className="flex justify-around items-center w-full h-full m-2 text-2xl">
                <NavLink className=' p-1' to={"/"}><IoHomeOutline className=" mb-1"/></NavLink>
                <NavLink to={"/bag"}><MdOutlineShoppingBag className=" mb-1" /></NavLink>
                <NavLink to={'/fav'}><MdFavoriteBorder className=" mb-1"/></NavLink>
                <li className=" cursor-pointer"><CgProfile/></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
