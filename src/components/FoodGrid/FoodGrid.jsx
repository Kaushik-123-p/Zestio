import FoodData from "../../Data/FoodData.js"
import Category from "../Category/Category.jsx"
import FoodCard from "../FoodCard/FoodCard.jsx"

import { FaUtensils } from "react-icons/fa"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import { FaRegSadTear } from "react-icons/fa"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux"


const FoodGrid = () => {
    const category = useSelector(state => state.category.category)

    const search = useSelector(state => state.search.search)



    const toastNotification = (name) => {
        return toast.success(`${name} Added To cart`)
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="max-w-6xl mx-auto px-4 py-10 mt-20">

                {/* Category */}
                <div className="mb-8">
                    <Category />
                </div>

                {/* Title + Count */}
                <div className="flex justify-between items-center mb-6 flex-wrap gap-2">

                    <div className="flex items-center gap-2">
                        <FaUtensils className="text-orange-400 text-xl" />
                        <h1 className="text-2xl font-bold text-gray-800">
                            Popular Dishes
                        </h1>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MdOutlineRestaurantMenu />
                        <span>{FoodData.length} Items</span>
                    </div>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">



                    {FoodData.length > 0 ? FoodData.filter((food) => {
                        if (category === "All") {
                            return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        } else {
                            return category === food.category && food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        }
                    })
                        .map((item) => (
                            <FoodCard key={item.id} item={item} toastNotification={toastNotification} />
                        )) : (
                        <div className="col-span-full flex flex-col items-center text-gray-500">
                            <FaRegSadTear className="text-3xl mb-2" />
                            <p>No food items found</p>
                        </div>
                    )
                    }
                </div>

            </div></>
    )
}

export default FoodGrid