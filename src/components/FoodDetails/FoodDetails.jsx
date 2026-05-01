import { useParams, useNavigate } from "react-router-dom"
import FoodData from "../../Data/FoodData"
import { FaStar, FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice/CartSlice"


const FoodDetails = () => {

    const cartItems = useSelector((state) => state.cart.cart)

    const dispatch = useDispatch()

    const { id } = useParams()
    const navigate = useNavigate()

    const food = FoodData.find((item) => item.id === Number(id))

    const existingItem = cartItems.find(item => item.id === food.id)

    const [qty, setQty] = useState(existingItem ? existingItem.qty : 1)

    useEffect(() => {
        if (existingItem) {
            setQty(existingItem.qty)
        }
    }, [existingItem])

    if (!food) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Food not found
            </div>
        )
    }

    const addToCartFunction = () => {
        dispatch(addToCart({ ...food, qty }))
    }

    return (
        <div className="min-h-screen bg-slate-100 mt-16 px-4 pt-34 md:pt-20">

            <div className="max-w-3xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-400 mb-4 text-sm"
                >
                    <FaArrowLeft />
                    Back
                </button>

                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">

                    {/* IMAGE */}
                    <div className="md:w-1/2 overflow-hidden">
                        <img
                            src={food.img}
                            alt={food.name}
                            className="w-full h-56 md:h-full object-cover"
                        />
                    </div>

                    {/* DETAILS */}
                    <div className="md:w-1/2 p-5 flex flex-col justify-between">

                        <div>

                            {/* Title */}
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                                {food.name}
                            </h1>

                            {/* Rating + Category */}
                            <div className="flex items-center gap-2 mb-3">

                                <div className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">
                                    <FaStar />
                                    {food.rating}
                                </div>

                                <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-full text-xs">
                                    {food.category}
                                </span>

                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4">
                                {food.desc}
                            </p>

                        </div>

                        {/* Bottom */}
                        <div className="space-y-3">

                            {/* Price */}
                            <span className="text-xl font-bold text-orange-400">
                                ₹{food.price}
                            </span>

                            {/* Quantity */}
                            <div className="flex items-center gap-2">

                                <button
                                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                    className="border p-1 rounded-md hover:bg-orange-400 hover:text-white"
                                >
                                    <FaMinus className="text-xs" />
                                </button>

                                <span className="text-sm font-medium">{qty}</span>

                                <button
                                    onClick={() => setQty(qty + 1)}
                                    className="border p-1 rounded-md hover:bg-orange-400 hover:text-white"
                                >
                                    <FaPlus className="text-xs" />
                                </button>

                            </div>

                            {/* Button */}
                            <button className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition text-sm" onClick={addToCartFunction}>
                                Add {qty} to Cart
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FoodDetails