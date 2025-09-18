import React from "react"

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    title: "The Future of Web Development",
    date: "Sep 15, 2025",
    description:
      "Explore how emerging technologies like AI, Web3, and serverless architecture are shaping the future of web development.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=600&q=80",
    title: "Top 10 Startup Growth Hacks",
    date: "Sep 12, 2025",
    description:
      "From lean marketing to automation, learn 10 proven growth hacks that every startup should implement to scale faster.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&q=80",
    title: "UI/UX Best Practices in 2025",
    date: "Sep 10, 2025",
    description:
      "Discover the latest design trends, accessibility improvements, and tools that define great user experiences in 2025.",
  },
]


const OurBlog = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Our Blog
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Stay updated with the latest trends, insights, and tips from our
                    experts in technology, business, and design.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden hover:shadow-xl transition duration-300 text-left"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-sm text-blue-600 font-medium mb-2">
                                    {blog.date}
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {blog.description}
                                </p>
                                <button className="text-blue-600 font-medium hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="mt-12 px-8 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurBlog
