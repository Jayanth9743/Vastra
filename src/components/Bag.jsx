import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveBag, IncreaseQuantity, DecreaseQuantity } from "./Redux/BagSlice"; // adjust the import path accordingly

const Bag = () => {
    const dispatch = useDispatch();
    const { bag, totalAmount } = useSelector(info => info.bag);

    const handleIncrease = (id) => {
        dispatch(IncreaseQuantity({ id }));
    };

    const handleDecrease = (id) => {
        dispatch(DecreaseQuantity({ id }));
    };

    const handleRemove = (id) => {
        dispatch(RemoveBag({ id }));
    };

    if (totalAmount === 0){
        return(
            <div className="flex flex-col items-center justify-center w-full gap-8 mt-72 ">
                <div className="text-xl font-bold">your bag is empty</div>
                <div className="text-xl font-bold">click below to view products</div>
                <Link to={'/'}><button className="w-20 p-2 text-white bg-blue-500 rounded-md shadow-md cursor-pointer hover:scale-110">view</button></Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6 pb-16 mt-20">
            {bag.map(item => (
                <div className="flex items-start justify-between w-11/12 rounded-lg shadow-xl h-44" key={item.id}>
                    <div className="flex items-start justify-start w-auto h-full gap-3">
                        <Link to={`/product/${item.id}`} className="w-24 h-32 my-auto ml-2">
                            <img src={item.image} alt="" className="object-cover max-w-full max-h-full" />
                        </Link>
                        <div className="flex flex-col items-start justify-start gap-2 my-auto">
                            <div className="hidden md:block md:w-96">{item.title}</div>
                            <div>${item.price}</div>
                            <button onClick={() => handleRemove(item.id)} className="text-red-500">remove</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-0 mt-16">
                            <button onClick={() => handleDecrease(item.id)} className="p-2 border border-r-0 border-black border-solid rounded-l-sm">-</button>
                            <div className="p-2 border border-black border-solid">{item.quantity}</div>
                            <button onClick={() => handleIncrease(item.id)} className="p-2 border border-l-0 border-black border-solid rounded-r-sm">+</button>
                        </div>
                    </div>
                    <div className="my-auto mr-3">${item.totalPrice.toFixed(2)}</div>
                </div>
            ))}
            <div className="flex flex-col items-end justify-center w-11/12 gap-4">
                <hr className="w-full border-black" />
                <div className="mr-3 text-lg font-medium">Total amount: ${totalAmount.toFixed(2)}</div>
                <button className="p-2 mr-3 text-white bg-blue-500 rounded-md">proceed</button>
            </div>
        </div>
    );
};

export default Bag;
