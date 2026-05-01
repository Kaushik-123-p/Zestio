import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ element }) => {

    const cartitem = useSelector((state) => state.cart.cart)

    return cartitem.length > 0 ? element : <Navigate to="/" />

}

export default ProtectedRoutes
