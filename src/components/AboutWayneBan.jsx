import React from 'react'

const AboutWayneBan = () => {
    return (
        <section className='bg-[#e8f1fe] py-16'>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                        About Wayne Ebanks
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        Wayne Ebanks has a MBA in banking and Finance and his BSC in Management and Entrepreurship Studies. Wayne Ebanks has been trading on platforms such as ThinkorSwim since the 1990ies. Now living in Wellington Florida USA for 8 years Wayne Ebanks has published his stock option trading book Stock Option for Life time Income on Amazon.
                    </p>

                </div>
                <div>
                    <img
                        src="/src/assets/aboutwayneimg.png"
                        alt="About Company"
                        className="w-full h-auto rounded-2xl transition duration-300"
                    />
                </div>

            </div>
        </section>
    )
}

export default AboutWayneBan