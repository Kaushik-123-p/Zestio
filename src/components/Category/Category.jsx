import { useEffect, useState } from "react"
import FoodData from '../../Data/FoodData.js'
import { useDispatch, useSelector } from "react-redux"
import { setCategory } from "../../redux/slices/categorySlice/categorySlice.js"

const Category = () => {
    const dispatch = useDispatch()

    const selectCategory = useSelector(state => state.category.category);

    const [categories, setCategories] = useState([])

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map(food => food.category))]
        setCategories(uniqueCategories)
        // console.log(uniqueCategories)
        // console.log(categories)
    }

    useEffect(() => {
        listUniqueCategories()
    }, [])
    return (
        <div className="bg-slate-100 py-8 pt-20   md:pt-0">

            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <h1 className="text-2xl font-semibold text-gray-800 my-4">
                    Find Your Favorite Food
                </h1>

                <ul className="flex gap-4 flex-wrap justify-center">
                    <button className={`px-4 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-orange-400 hover:text-white transition ${selectCategory === "All" && "bg-orange-400 text-white transition-all"}`} onClick={() => dispatch(setCategory("All"))}>

                        All
                    </button>
                    {categories.map((category, index) => (
                        <button className={`px-4 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-orange-400 hover:text-white transition ${selectCategory === category && "bg-orange-400 text-white transition-all"}`} key={index}
                            onClick={() => dispatch(setCategory(category))}>
                            {category}
                        </button>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Category