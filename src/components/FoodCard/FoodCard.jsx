import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice/CartSlice";
import { useNavigate } from "react-router-dom";



const FoodCard = ({ item, toastNotification }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 " >

            {/* Image */}
            <div className="w-full h-44 sm:h-48 overflow-hidden rounded-t-xl" onClick={() => navigate(`/food/${item.id}`)}>
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Name + Price */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                    </h2>
                    <span className="text-orange-400 font-bold">
                        ₹{item.price}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {item.desc.slice(0, 50)} ...
                </p>

                {/* Category + Rating */}
                <div className="flex justify-between items-center mt-3">

                    {/* Category */}
                    <span className="text-xs font-medium bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
                        {item.category}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm font-medium text-yellow-500">
                        <FaStar className="text-lg" />
                        <span>{item.rating}</span>
                    </div>

                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition" onClick={() => { dispatch(addToCart({ id: item.id, img: item.img, name: item.name, price: item.price, rating: item.rating, qty: 1 })); toastNotification(item.name) }}>
                    Add to Cart
                </button>

            </div>
        </div>
    )
}

export default FoodCard