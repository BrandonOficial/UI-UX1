import React from 'react'

const SmallImg = ({ src }) => {
    return (
        <div style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
        }} className='w-full h-[450px] saturate-120 lg:h-[380px] bg-zinc-300 center-item text-zinc-600'>
            {!src && "Small Image"}
        </div>
    )
}

export default SmallImg
