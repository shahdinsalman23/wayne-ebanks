import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Overlay fade-in
      gsap.from(".hero-overlay", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Welcome text animation
      gsap.from(".hero-subtitle", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Title animation
      gsap.from(".hero-title", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Paragraph animation
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Button animation using fromTo to prevent hiding
      gsap.fromTo(
        ".hero-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 1.2, ease: "back.out(1.7)" }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative bg-[url('/src/assets/hero-banner-image.png')] bg-cover bg-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 hero-overlay z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-16 sm:py-24 lg:py-32 z-10">
        <div className="max-w-2xl flex flex-col gap-6">
          <h6 className="hero-subtitle text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide text-blue-300 z-10">
            Welcome To Our Website
          </h6>
          <h2 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-md z-10">
            Wayne Ebanks
          </h2>
          <p className="hero-text text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed z-10">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley...
          </p>
          <button className="hero-btn relative z-20 px-6 sm:px-8 py-2 sm:py-3 w-fit text-[#35a7f0] font-medium cursor-pointer bg-white rounded-full border border-white hover:bg-transparent hover:text-white transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
