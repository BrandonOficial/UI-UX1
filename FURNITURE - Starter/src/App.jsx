import Footer from "./components/Footer";
import GetInspired from "./components/GetInspired";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import ShopByRoom from "./components/ShopByRoom";
import Trending from "./components/Trending";

// Scroll smother
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

const App = () => {
  const contentRef = useRef(null)
  // GSAP config
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    const smoother = ScrollSmoother.create({
      conten: "#smooth-content",
      smooth: 1.8,
      effects: true,
    })
    return () => {
      smoother && smoother.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return <div className="min-h-screen overflow-clip">
    {/* header */}
    <Header />
    <hr className="text-zinc-300 -mt-4" />
    {/* main */}
    <main id="smooth-content" ref={contentRef}>
      <Hero />
      <hr className="text-zinc-300" />
      <Trending />
      <hr className="text-zinc-300" />
      <NewArrival />
      <hr className="text-zinc-300" />
      <ShopByRoom />
      <hr className="text-zinc-300" />
      <GetInspired />
      <Footer />
      <div className="w-full lg:h-[130px]"></div>
    </main>
  </div>;
};

export default App;
