import React from 'react'
import phoneIMage from "../assets/cta 1.png"

const WomenComp = () => {
    return (
        <div className='w-[90%] m-auto'>
            <div className='bg-[#A2BE95] rounded-4xl md:flex items-center justify-between text-white px-20'>
                <div className=''>
                    <h1 className='md:text-4xl text-xl font-bold mb-12'>Бесплатная консультация  <br />
                        диетолога</h1>
                    <div className='md:flex grid items-center gap-7.5 mb-8'>
                        <input className='text-[#493E3E] font-semibold bg-white py-3 md:pr-10 px-5 rounded-4xl outline-none' type="text" placeholder='Ваше имя' />
                        <input className='text-[#493E3E] font-semibold bg-white py-3 md:pr-10 px-5 rounded-4xl outline-none' type="tel" placeholder='Телефон' />
                    </div>
                    <button className='bg-[#4D8F76] text-white mb-10 font-semibold py-3 px-15 rounded-4xl'>Отправить заявку</button>
                </div>
                <img className='relative bottom-5' src={phoneIMage} alt="" />
            </div>
        </div>
    )
}

export default WomenComp
