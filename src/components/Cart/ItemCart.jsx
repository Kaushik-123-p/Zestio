import { FaMinus, FaPlus } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux"
import { decrementQty, incrementQty, removeFromCart } from "../../redux/slices/cartSlice/CartSlice";

import toast from 'react-hot-toast';



const ItemCart = ({ id, img, name, price, qty }) => {
    const dispatch = useDispatch()
    return (
        <>

            <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-3">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">

                    <img
                        src={img}
                        alt="food"
                        className="w-14 h-14 object-cover rounded-md"
                    />

                    <div>
                        <h2 className="font-semibold text-gray-800 text-sm">
                            {name}
                        </h2>

                        <span className="text-orange-400 font-bold text-sm">
                            ₹{price}
                        </span>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-end gap-2">
                    <button className="text-red-400 text-xs hover:text-red-500">
                        <MdDelete onClick={() => { dispatch(removeFromCart({ id })); toast.error(`${name} Removed From Cart`) }} />
                    </button>
                    {/* Quantity */}
                    <div className="flex items-center gap-2">

                        <button className="border border-gray-300 p-1 rounded-md hover:bg-orange-400 hover:text-white transition">
                            <FaMinus className="text-xs" onClick={() => dispatch(decrementQty({ id }))} />
                        </button>

                        <span className="text-sm font-medium">{qty}</span>

                        <button className="border border-gray-300 p-1 rounded-md hover:bg-orange-400 hover:text-white transition">
                            <FaPlus className="text-xs" onClick={() => { dispatch(incrementQty({ id })); }} />
                        </button>

                    </div>




                </div>

            </div>
        </>
    )
}

export default ItemCart