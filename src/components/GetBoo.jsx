import React from 'react'

const GetBoo = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl bg-[#8bbbf8] rounded-md p-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Column (8/12) */}
                <div className="lg:col-span-8 text-left">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Stock Option Trading
                        For Life Time Income
                    </h2>
                    <p className="text-white text-base leading-relaxed mb-6">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="px-16 py-2 bg-[#1876F2] font-medium cursor-pointer text-white rounded-full border border-[#1876F2] hover:bg-transparent hover:text-[#1876F2] transition-all">
                        Get Boo
                    </button>
                </div>

                {/* Image Column (4/12) */}
                <div className="lg:col-span-4">
                    <img
                        src="/src/assets/stocimg.png"
                        alt="Get the Book"
                        className="h-80 m-auto rounded-2xl transition duration-300"
                    />
                </div>
            </div>
        </section>
    )
}

export default GetBoo
