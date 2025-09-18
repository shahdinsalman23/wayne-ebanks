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
  const locoScrollRef = useRef(null);

  // ✅ Locomotive + ScrollTrigger setup
  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollEl = scrollRef.current;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    locoScrollRef.current = locoScroll;

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  // ✅ Back-to-top button (using locomotive, not window.scrollY)
  useEffect(() => {
    const checkScroll = () => {
      if (!locoScrollRef.current) return;
      const y = locoScrollRef.current.scroll.instance.scroll.y;
      setShowScroll(y > 300);
    };

    locoScrollRef.current?.on("scroll", checkScroll);

    return () => {
      locoScrollRef.current?.off("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    locoScrollRef.current?.scrollTo(0, { duration: 800, disableLerp: false });
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
