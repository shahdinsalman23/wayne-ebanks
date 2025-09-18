import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import OurServices from "./components/OurServices.jsx";
import AboutCompany from "./components/AboutCompany.jsx";
import AboutWayneBan from "./components/AboutWayneBan.jsx";
import OurPodcast from "./components/Ourpodcast.jsx";
import ClientTestimonial from "./components/ClientTestimonial.jsx";
import GetBoo from "./components/GetBoo.jsx";
import OurBlog from "./components/OurBlog.jsx";
import Contactus from "./components/Contactus.jsx";
import Footer from "./components/Footer.jsx";
import { FaArrowUp } from "react-icons/fa";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollRef = useRef(null);


  
  // Initialize Locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Update ScrollTrigger on Locomotive Scroll
    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    return () => scroll.destroy();
  }, []);

  // Scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={scrollRef} data-scroll-container>
      <Header />
      <HeroBanner />
      <OurServices />
      <AboutCompany />
      <AboutWayneBan />
      <OurPodcast />
      <ClientTestimonial />
      <GetBoo />
      <OurBlog />
      <Contactus />
      <Footer />

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 cursor-pointer rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default App;
