import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="bg-slate-100 min-h-screen mt-20">

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">

                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-400 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600">
                        Have questions or feedback? We’d love to hear from you!
                    </p>
                </div>

                {/* Main */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Info */}
                    <div className="bg-white p-6 rounded-xl shadow-md">

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Get in Touch
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Feel free to reach out for any queries, suggestions, or support.
                        </p>

                        <div className="space-y-4">

                            {/* Location */}
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-orange-400" />
                                </div>
                                <p className="text-gray-700">India</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FaEnvelope className="text-orange-400" />
                                </div>
                                <p className="text-gray-700">support@foodie.com</p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FaPhoneAlt className="text-orange-400" />
                                </div>
                                <p className="text-gray-700">+91 98765 43210</p>
                            </div>

                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white p-6 rounded-xl shadow-md space-y-4">

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact