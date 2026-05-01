import { IoClose } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa"
import { MdRestaurantMenu } from "react-icons/md"
import ItemCart from "./ItemCart"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Cart = ({ setShowCart }) => {

    const cartItems = useSelector((state) => state.cart.cart)
    // console.log(cartItems)
    const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.qty * item.price,
        0
    );

    const navigate = useNavigate()

    function checkoutBtn() {
        navigate("/success")
        setShowCart(false)
    }
    return (
        <div>

            <div className="fixed top-0 right-0 w-full sm:w-87.5 h-full bg-white shadow-xl z-50 flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center gap-2">
                        <FaShoppingCart className="text-orange-400 text-xl" />
                        <span className="text-lg font-semibold text-gray-800">
                            My Order
                        </span>
                    </div>

                    <IoClose
                        onClick={() => setShowCart(false)}
                        className="text-2xl text-gray-600 cursor-pointer hover:text-red-400 transition"
                    />
                </div>

                {/* Cart Items */}

                <div className="flex-1 overflow-y-auto p-4 space-y-2">

                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <ItemCart
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                qty={item.qty}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 mt-10">

                            <FaShoppingCart className="text-4xl text-orange-300 mb-3" />

                            <h2 className="text-lg font-semibold">
                                Your Cart is Empty
                            </h2>

                            <p className="text-sm mt-1 flex items-center gap-1">
                                <MdRestaurantMenu className="text-orange-400" />
                                Add some delicious food to get started
                            </p>

                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-white">

                    <div className="flex justify-between text-gray-700 mb-2">
                        <span>Items</span>
                        <span>{totalQty}</span>
                    </div>

                    <div className="flex justify-between text-gray-800 font-semibold mb-3">
                        <span>Total</span>
                        <span>₹{totalPrice}</span>
                    </div>

                    <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition shadow-md" onClick={checkoutBtn}>
                        Checkout
                    </button>

                </div>

            </div>


        </div>
    )
}

export default Cart