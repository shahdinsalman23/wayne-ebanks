import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ClientTestimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, CompanyX",
            feedback:
                "PulxSoft Solutions ne hamare liye ek amazing product deliver kiya! Team bohot professional aur supportive thi.",
            image: "https://i.pravatar.cc/100?img=1",
        },
        {
            id: 2,
            name: "Sarah Smith",
            role: "Marketing Manager, BrandY",
            feedback:
                "Inka kaam bohot creative aur fast hai. Hamesha expectations se zyada deliver karte hain.",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: 3,
            name: "David Johnson",
            role: "Founder, StartupZ",
            feedback:
                "Best experience working with them. UI/UX design bohot premium aur user-friendly banaya.",
            image: "https://i.pravatar.cc/100?img=3",
        },
        {
            id: 4,
            name: "Emily Brown",
            role: "CTO, TechCorp",
            feedback:
                "Highly recommended! AI aur software solutions dono hi excellent quality ke provide kiye.",
            image: "https://i.pravatar.cc/100?img=4",
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    What Our Clients Say
                </h2>

                <Slider {...settings}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="px-4">
                            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500"
                                />
                                <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    {t.name}
                                </h4>
                                <span className="text-sm text-gray-500">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ClientTestimonial
