import React from 'react'

const Warch = () => {
    return (
        <div className='w-[90%] m-auto'>
            <h1 className='text-4xl font-bold mb-8 '>Частые вопросы</h1>
            <div className='md:flex grid items-center mb-8 gap-8'>
                <button className='text-[#493E3E] font-semibold py-2.5 px-5.5 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:text-[#493E3E] hover:font-bold'>Продукты</button>
                <button className='text-[#493E3E] font-semibold py-2.5 px-5.5 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:text-[#493E3E] hover:font-bold'>Программы</button>
                <button className='text-[#493E3E] font-semibold py-2.5 px-5.5 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:text-[#493E3E] hover:font-bold'>Оплата и доставка</button>
                <button className='text-[#493E3E] font-semibold py-2.5 px-5.5 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:text-[#493E3E] hover:font-bold'>Хранение</button>
            </div>
            <div className='mb-20'>
                <select className='text-[#493E3E] mb-5 font-bold text-xl border border-blue-100 outline-none py-5 px-8 w-full bg-white shadow-lg rounded-4xl'>
                    <option value="">Как я могу оплатить заказ?</option>
                    <option value="">Как я могу оплатить заказ?</option>
                </select>
                <select className='text-[#493E3E] mb-5 font-bold text-xl border border-blue-100 outline-none py-5 px-8 w-full bg-white shadow-lg rounded-4xl'>
                    <option value="">Могу ли я изменить адрес и время доставки?</option>
                    <option value="">Каждый вечер, в день доставки, с вами связывается курьер, ориентировочно с 19:00 до 20:00 для уточнения адреса и времени доставки. <br /> При необходимости, вы можете их изменить, сообщив об этом курьеру при звонке.</option>
                </select>
                <select className='text-[#493E3E] mb-5 font-bold text-xl border border-blue-100 outline-none py-5 px-8 w-full bg-white shadow-lg rounded-4xl'>
                    <option value="">Могу ли я перенести день доставки?</option>
                    <option value="">Могу ли я перенести день доставки?</option>
                </select>
                <select className='text-[#493E3E] mb-5 font-bold text-xl border border-blue-100 outline-none py-5 px-8 w-full bg-white shadow-lg rounded-4xl'>
                    <option value="">Могу ли я приостановить доставку, на какой срок?</option>
                    <option value="">Могу ли я приостановить доставку, на какой срок?</option>
                </select>
            </div>
        </div>
    )
}

export default Warch
