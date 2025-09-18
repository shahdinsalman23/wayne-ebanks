import React from 'react'

const AboutCompany = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                        src="/src/assets/aboutimg.png"
                        alt="About Company"
                        className="w-full h-auto rounded-2xl transition duration-300"
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                        About Company
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany
