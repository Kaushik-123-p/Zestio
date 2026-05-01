
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="bg-slate-100 min-h-screen mt-20">


            {/* <Category /> */}

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 flex flex-col md:flex-row items-center justify-center min-h-screen gap-10">


                <div className="flex-1 text-center md:text-left ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-4 leading-tight">
                        Delicious Food <br /> Delivered Fast
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        Order your favorite meals anytime, anywhere with quick delivery.
                    </p>

                    <Link to="/foodgrid">
                        <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition">
                            Explore Menu
                        </button>
                    </Link>

                </div>


                <div className="flex-1 flex justify-center">
                    <img
                        src={logo}
                        alt="food"
                        className="w-40 sm:w-52 md:w-72 drop-shadow-lg"
                    />
                </div>

            </div>



        </div>
    )
}

export default Home