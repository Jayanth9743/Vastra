import { FaShippingFast } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
   <div className="flex flex-col items-center justify-center w-full text-white bg-purple-500 ">
        <div className="flex flex-col items-center w-full h-full gap-10 pt-2 justify-evenly mb-14 md:mb-8 md:flex-row">
            <div className="flex flex-col items-center h-full text-xl justify-evenly md:w-1/4 ">
                <h2 className="text-2xl">online shopping</h2>
                <p>men</p>
                <p>women</p>
                <p>kids</p>
                <p>jewelery</p>
            </div>
        
            <div className="flex flex-col items-center h-full gap-5 justify-evenly md:w-1/4">
                <div className="flex items-center h-full gap-5 text-xl justify-evenly ">
                    <FaShippingFast className="text-2xl"/>  free shipping all over India
                </div>
                <div className="text-xl">follow us on</div>
                    <div className="flex items-center w-full gap-4 text-3xl justify-evenly">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaSquareXTwitter/>
                        <FaYoutube/>
                    </div>
                </div>
            <div className="flex flex-col items-center w-full gap-4 justify-evenly md:w-1/4">
                <p className="text-3xl md:text-2xl">say your suggestions</p>
                <input type="text" placeholder="suggestions" className="w-56 p-3 text-black rounded-md outline-none md:p-2" />
                <div className="w-16 p-2 text-center bg-blue-600 rounded-md hover:scale-110 md:p-1 ">button</div>
            </div>
        </div>
        <p className="mb-20 text-lg md:mb-0">2024 © Developed By Jayanth P</p>
   </div>
  )
}

export default Footer
