import React from 'react'

interface Props {
    img: string,
    name: string,
    p1: string,
    p2: string,
    style: string,
}

const Comp1 = ({ img, name, p1, p2, style }: Props) => {
    return (
        <div>
            <div className={`md:flex ${style} mb-15 items-center justify-between w-[90%] m-auto`} >
                <img src={img} alt="" />
                <div className='md:w-190'>
                    <h1 className='text-[#000000] mt-10 md:text-4xl text-xl font-bold mb-12'>{name}</h1>
                    <p className='text-[#493E3E] font-semibold mb-3'>{p1}</p>
                    <p className='text-[#493E3E] font-semibold mb-3'>{p2}</p>
                </div>
            </div>
        </div>
    )
}

export default Comp1
