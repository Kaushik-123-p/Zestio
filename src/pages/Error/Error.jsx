import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 px-4 text-center">

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-orange-400 mb-4">
                404
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-6">
                Oops! The page you’re looking for doesn’t exist 😢
            </p>

            <Link
                to="/"
                className="bg-orange-400 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg hover:bg-orange-500 transition shadow-md"
            >
                Go Back Home
            </Link>

        </div>
    )
}

export default Error