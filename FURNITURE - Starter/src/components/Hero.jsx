import { ArrowRight } from "lucide-react"
import HeroImg from "./HeroImg"

const Hero = () => {
    return (
        <section className="max-w-7xl mt-30 mx-auto p-4 sm:p-8 mb-20">
            <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
                {/* Left */}
                <div className="lg:w-1/2">
                    <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-6">
                        <span className="block impact lg:text-[250px]">FINE</span>
                        <span className="block impact lg:text-[250px] lg:mt-10">FURNISHING</span>
                    </h1>

                    <div className="text-base lg:text-lg text-zinc-600 max-w-md lg:w-full mb-8 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptates, ratione totam facilis natus alias nobis laborum omnis explicabo facere aut autem, id dignissimos vero </div>

                    <button className="group flex items-center space-x-3 bg-zinc-900 text-white text-sm font-semibold py-4 px-6 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle cursor-pointer"><span>Shop Now</span> <ArrowRight size={20} className="group-hover:rotate-360 -routate-35 transition-all duration-500 ease-in" /></button>
                </div>
                {/* Right */}
                <HeroImg />
            </div>
        </section>
    )
}

export default Hero