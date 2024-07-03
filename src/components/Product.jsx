import { useParams, useLocation, Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
import { sliderItems, menWear, womenWear, kidsWear, jewelery, recommendation } from "./Data"; 
import { useDispatch,  } from "react-redux";
import { AddBag } from "./Redux/BagSlice";

const Product = () => {
    const dispatch = useDispatch()
    const { productId } = useParams();
    const location = useLocation();
    

    
    // Find the product based on the productId from the URL params
    const findProductById = (productId) => {
        // Search through each category array to find the product by ID
        let product = sliderItems.find(item => item.id === parseInt(productId));
        if (!product) {
            product = menWear.find(item => item.id === parseInt(productId));
        }
        if (!product) {
            product = womenWear.find(item => item.id === parseInt(productId));
        }
        if (!product) {
            product = kidsWear.find(item => item.id === parseInt(productId));
        }
        if (!product) {
            product = jewelery.find(item => item.id === parseInt(productId));
        }
        if (!product) {
            product = recommendation.find(item => item.id === parseInt(productId));
        }
        return product;
    };

    // Fetch the product based on location state or direct search
    const product = location.state?.product || findProductById(productId);

    if (!product) {
        return <div className="mt-20">Product not found</div>;
    }

    const { image, title, description, price } = product;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 pb-48 mt-24 lg:flex-row lg:gap-8">
            <div className="flex items-center justify-center w-48 h-64">
                <img src={image} alt="" className="object-cover max-w-full max-h-full" />
            </div>
            <div className="flex flex-col items-start w-9/12 gap-4 justify-evenly h-72">
                <div className="text-xl font-medium">{title}</div>
                <div>{description.slice(0,380)}</div>
                <div className="text-blue-500">${price}</div>
                <div className="flex items-center justify-start">
                    <Link to={'/bag'} className="p-2 text-white bg-blue-500 rounded-md shadow-md cursor-pointer hover:scale-110 " onClick={()=>dispatch(AddBag(product))}>add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
