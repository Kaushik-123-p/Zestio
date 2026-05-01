import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Success = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

            {loading ? (


                <div className="flex flex-col items-center justify-center gap-4">

                    <PropagateLoader color="#fb923c" size={15} />

                    <p className="text-gray-600 text-sm">
                        Placing your order...
                    </p>

                </div>

            ) : (


                <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">

                    <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />

                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Order Placed Successfully!
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Your food is on the way
                    </p>

                    <Link to="/foodgrid">
                        <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition shadow-md">
                            Order More Food
                        </button>
                    </Link>

                </div>

            )}

        </div>
    )
}

export default Success