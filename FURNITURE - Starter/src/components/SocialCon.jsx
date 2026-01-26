import React from 'react'

const SocialCon = ({ Icon }) => {
    return (
        <a href="#" className='group p-2 border border-white/20 rounded-full hover:bg-white transition-all duration-200 ease-in hover:-translate-y-1.5'>
            <Icon size={16} className="text-white group-hover:text-zinc-900" />
        </a>
    )
}

export default SocialCon
