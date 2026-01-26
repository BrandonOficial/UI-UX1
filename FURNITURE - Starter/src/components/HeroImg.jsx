import React from 'react'

const HeroImg = ({ src }) => {
    return (
        <div className='lg:absolute overflow-clip right-8 lg:w-1/2 mt-10 lg:mt-0 HERO-IMAGE-WRAPPER'>
            <div style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: "bottom",
                backgroundSize: "cover"

            }} className="aspect-video saturate-120 lg:h-[250px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                {/* Image content */}
                {src ? "" : (<span className='text-lg'>Hero Image Placeholder</span>)}
            </div>
        </div>
    )
}

export default HeroImg
