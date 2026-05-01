import { FaLeaf, FaBolt, FaUtensils } from "react-icons/fa"

const About = () => {
    return (
        <div className="bg-slate-100 min-h-screen mt-20">

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">


                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-400 mb-4">
                        About Foodie
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Discover delicious vegetarian meals, explore categories, and enjoy a smooth food ordering experience.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">


                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                        <FaLeaf className="text-3xl text-orange-400 mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Fresh & Healthy
                        </h2>
                        <p className="text-gray-600 text-sm">
                            We focus on providing fresh and vegetarian food options for a healthy lifestyle.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                        <FaBolt className="text-3xl text-orange-400 mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Fast Delivery
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Get your food delivered quickly and efficiently right to your doorstep.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                        <FaUtensils className="text-3xl text-orange-400 mx-auto mb-3" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Variety of Dishes
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Explore a wide range of dishes from breakfast to dinner and snacks.
                        </p>
                    </div>

                </div>


                <div className="bg-white rounded-xl shadow-md p-6 md:p-10">

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                        Who We Are
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg mb-4">
                        <span className="text-orange-400 font-semibold">Foodie</span> is a modern food delivery web app built to provide a seamless experience for users to explore and enjoy vegetarian meals.
                    </p>

                    <p className="text-gray-600 text-base md:text-lg mb-4">
                        This project is built using <span className="font-medium">React.js</span> and <span className="font-medium">Tailwind CSS</span>, focusing on performance, responsiveness, and clean UI design.
                    </p>

                    <p className="text-gray-600 text-base md:text-lg">
                        Our mission is to make food discovery simple and enjoyable for everyone
                    </p>

                </div>

            </div>
        </div>
    )
}

export default About