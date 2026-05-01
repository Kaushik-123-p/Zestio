import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useDispatch } from "react-redux"
import { setSearch } from "../../redux/slices/searchSlice/searchSlice"
const Navbar = () => {

    const dispatch = useDispatch()
    return (
        <nav className="bg-white shadow-md z-10 fixed w-full top-0">

            {/* Top Section */}
            <div className="max-w-6xl mx-auto flex flex-col items-start md:flex-row md:justify-between md:items-center gap-4 px-4 md:px-6 py-3">

                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center gap-2 justify-between md:justify-start">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                            <h1 className="text-xl md:text-2xl font-bold text-orange-400">
                                Zestio
                            </h1>
                        </div>
                    </div>

                </Link>
                {/* Search */}
                <div className="w-full md:w-auto">
                    <input
                        type="search"
                        placeholder="Search for food..."
                        className="w-full md:w-64 border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-400 " onChange={(e) => dispatch(setSearch(e.target.value))}
                    />
                </div>

                {/* Date */}
                <div className="text-center md:text-right">
                    <h3 className="text-xs md:text-sm bg-orange-100 text-orange-500 px-3 py-1 rounded-md inline-block">
                        {new Date().toUTCString().slice(0, 16)}
                    </h3>
                </div>

            </div>

            {/* Menu */}
            <div>
                <ul className="flex flex-wrap justify-center gap-4 md:gap-8 bg-orange-400 py-2 text-sm md:text-base">
                    <Link to="/"><li className="text-white hover:text-orange-200 cursor-pointer">Home</li></Link>
                    <Link to="/foodgrid"><li className="text-white hover:text-orange-200 cursor-pointer">Menu</li></Link>
                    <Link to="/about"><li className="text-white hover:text-orange-200 cursor-pointer">About</li></Link>
                    <Link to="/contact"><li className="text-white hover:text-orange-200 cursor-pointer">Contact</li></Link>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar