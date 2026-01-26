import { ArrowRight } from "lucide-react"
import HeroImg from "./HeroImg"
// GSAP import
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {

    const rootRef = useRef(null)
    // GSAP Tweens
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
            // animations
            tl.from(".FINE", { x: -120, opacity: 0, duration: 0.9 }).from(".FURNISHING", { x: 120, opacity: 0, duration: 1.2 }, "-=0.6")

            //Image
            tl.from(".HERO-IMAGE-WRAPPER", { x: 50, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.5")

            //Subtext
            tl.from(".HERO-SUBTEXT", { y: 24, opacity: 0, duration: 0.8 }, "-=0.6")
        }, rootRef);

        return() => ctx.revert()

    }, [])

    return (
        <section ref={rootRef} className="max-w-7xl mt-30 mx-auto p-4 sm:p-8 mb-20">
            <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
                {/* Left */}
                <div className="lg:w-1/2">
                    <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-6">
                        <span className="block impact lg:text-[250px] FINE">FINE</span>
                        <span className="block impact lg:text-[250px] lg:mt-10 FURNISHING">FURNISHING</span>
                    </h1>

                    <div className="text-base lg:text-lg text-zinc-600 max-w-md lg:w-full mb-8 py-2 HERO-SUBTEXT">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptates, ratione totam facilis natus alias nobis laborum omnis explicabo facere aut autem, id dignissimos vero </div>

                    <button className="group flex items-center space-x-3 bg-zinc-900 text-white text-sm font-semibold py-4 px-6 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle cursor-pointer"><span>Shop Now</span> <ArrowRight size={20} className="group-hover:rotate-360 -routate-35 transition-all duration-500 ease-in" /></button>
                </div>
                {/* Right */}
                <HeroImg src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </section>
    )
}

export default Hero