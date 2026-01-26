import React from 'react'
import SocialCon from './SocialCon'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const MARQUEE_COPIES = 9
const Footer = () => {
    return (
        <footer className='bg-zinc-950 text-white'>
            <div className="relative max-w-7xl mx-auto p-4 sm:p-8 py-18 lg:py-24 overflow-hidden">
                {/* Upper area */}
                <div className="flex min-w-full whitespace-nowrap animate-marquee">
                    {Array.from({ length: MARQUEE_COPIES }).map((_, index) => (
                        <p key={index} aria-hidden={index !== 0 ? "true" : "false"} className="text-9xl lg:text-[250px] impact font-extrabold leading-none opacity-90 lg:opacity-95 pr-20">
                            FURNISHINGS
                        </p>
                    ))}
                </div>
                <img src="/images/sofa.png" alt="sofa_image" className='bottom-0 left-1/2 -translate-x-1/2 w-[250px] lg:w-[400px] mt-10 lg:mt-0 absolute hover:animate-wiggle duration-700 ease-in-out cursor-pointer' />
            </div>
            {/* Bottom area */}
            <div className="border-t border-zinc-800 py-6 lg:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-zinc-400 order-1 sm:order-1">
                        <strong>© Furniture.</strong> All rights reserved
                    </p>

                    <div className="flex space-x-3 order-2 sm:order-2">
                        <SocialCon Icon={Instagram} />
                        <SocialCon Icon={Facebook} />
                        <SocialCon Icon={Twitter} />
                        <SocialCon Icon={Linkedin} />
                        <SocialCon Icon={Youtube} />
                    </div>

                    <p className='text-zinc-400 order-3 sm:order-3'>
                        Design by <strong>Sahil Dobariya</strong>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
