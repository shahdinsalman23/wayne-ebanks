import React, { useRef, useState } from "react"
import Slider from "react-slick"
import { FaPlay } from "react-icons/fa"

const OurPodcast = () => {
    const settings = {
        centerMode: true,
        centerPadding: "60px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, centerPadding: "40px" },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, centerPadding: "20px" },
            },
        ],
    }

    const videos = [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
    ]

    // Track which video is playing
    const [playingIndex, setPlayingIndex] = useState(null)
    const videoRefs = useRef([])

    const handlePlay = (index) => {
        // Pause any other playing video
        videoRefs.current.forEach((vid, i) => {
            if (vid && i !== index) {
                vid.pause()
            }
        })
        // Play selected video
        const videoEl = videoRefs.current[index]
        if (videoEl) {
            videoEl.play()
            setPlayingIndex(index)
        }
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    Our Podcasts
                </h2>

                <Slider {...settings}>
                    {videos.map((video, index) => (
                        <div key={index} className="px-4">
                            <div className="video-card relative bg-white p-4 rounded-xl shadow-md overflow-hidden">
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    className="w-full h-64 object-cover rounded-lg"
                                    src={video}
                                    controls={playingIndex === index} // controls only when playing
                                />
                                {/* Show play button only if not playing */}
                                {playingIndex !== index && (
                                    <div className="play-btn-overlay absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="play-btn"
                                            onClick={() => handlePlay(index)}
                                        >
                                            <FaPlay className="text-white text-2xl ml-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default OurPodcast
