import React from 'react'

import image1 from "../assets/Group 76.png"
import image2 from "../assets/Group 56.png"
import image3 from "../assets/image_1_1.png"
import image4 from "../assets/image_2_1.png"
import image5 from "../assets/image_3.png"
import image6 from "../assets/image_4 (1).png"
import image7 from "../assets/Group 62.png"
import { useTheme } from '../components/ThemeContext';

const CompTwoGo = () => {
    const { dark } = useTheme()
    return (
        <div className='w-[90%] m-auto'>
            <div className='bg-[#E2DDC0] mb-15 p-8 rounded-4xl'>
                <h1 className='text-[#000000] font-bold md:text-4xl mb-9'>Подберите рацион для своих целей</h1>
                <div className='md:flex grid grid-cols-3 gap-5 items-center justify-between'>
                    <button className='py-3 px-4 rounded-4xl bg-white font-bold w-21'>Ж М</button>
                    <button className='py-3 px-4 rounded-4xl bg-white font-bold'>Ваш вес</button>
                    <button className='py-3 px-4 rounded-4xl bg-white font-bold'>Ваш рост</button>
                    <button className='py-3 px-4 rounded-4xl bg-white font-bold'>Ваш возраст</button>
                    <select className='py-3 px-4 rounded-4xl bg-white font-bold'>
                        <option value="">Активность</option>
                        <option value="">Активность</option>
                        <option value="">Активность</option>
                    </select>
                    <select className='py-2.5 px-4 rounded-4xl bg-white font-bold'>
                        <option value="">Выберите цель</option>
                        <option value="">Выберите цель</option>
                        <option value="">Выберите цель</option>
                    </select>
                    <button className='py-3 md:px-5 rounded-4xl bg-[#4D8F76] text-white font-bold'>Рассчитать рацион</button>
                </div>
            </div>
            <div className='shadow p-8 rounded-4xl'>
                <div className='md:flex items-center mb-8 justify-between'>
                    <h1 className='text-[#000000] mb-5 font-bold text-4xl'>Программа ПремиумБоул</h1>
                    <div className='flex gap-3 items-center'>
                        <img src={image1} alt="" />
                        <p className='text-[#4D8F76] font-bold'>Каждый день новое меню</p>
                    </div>
                </div>
                <h1 className='text-[#493E3E] font-bold mb-5'>Калорийность</h1>
                <div className='grid mb-10 md:grid-cols-5 gap-10'>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>900 ккал</h1>
                        <p className='text-[#493E3E] font-semibold'>3 блюда</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>1 250 ккал </h1>
                        <p className='text-[#493E3E] font-semibold'>4 блюда</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>1 600 ккал</h1>
                        <p className='text-[#493E3E] font-semibold'>5 блюда</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>2 050 ккал</h1>
                        <p className='text-[#493E3E] font-semibold'>6 блюда</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>индивидуально <br /> подобрать</h1>
                    </div>
                </div>
                <h1 className='text-[#493E3E] font-bold mb-5'>Продолжительность</h1>
                <div className='grid mb-9 md:grid-cols-5 gap-10'>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>Пробные 2 дня</h1>
                        <p className='text-[#493E3E] font-semibold'>за 2 900 ₽</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>1 неделя </h1>
                        <p className='text-[#493E3E] font-semibold'>1 700 ₽ в день</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>2 недели</h1>
                        <p className='text-[#493E3E] font-semibold'>1 600 ₽ в день</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>3 недели</h1>
                        <p className='text-[#493E3E] font-semibold'>1 520 ₽ в день</p>
                    </div>
                    <div className='border hover:border hover:bg-[#DFCCB7] hover:text-[#493E3E] border-[#DFCCB7] py-3 rounded-3xl text-center'>
                        <h1 className='text-[#493E3E] font-bold mb-1.5 '>4 недели</h1>
                        <p className='text-[#493E3E] font-semibold'>1 450 ₽  в день</p>
                    </div>
                </div>
                <div className='flex mb-10 items-center md:gap-5'>
                    <p className='text-[#493E3E] font-semibold'>Выберите, сколько дней <br />в неделю вы хотите питаться</p>
                    <img src={image2} alt="" />
                </div>
                <h1 className='text-[#000000] font-bold mb-5 text-xl'>Пример дневного рациона</h1>
                <p className='text-[#A98C64] font-semibold mb-5'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</p>
                <div className='md:flex grid grid-cols-2 mb-8 items-center gap-8'>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>понедельник</button>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>вторник</button>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>четверг</button>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>пятница</button>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>суббота</button>
                    <button className='txet-[#493E3E] font-semibold py-2 px-6 border border-[#DFCCB7] rounded-4xl hover:bg-[#DFCCB7] hover:font-bold'>воскресенье</button>
                </div>
                <div className='mb-7 grid md:grid-cols-4 m-auto gap-11'>
                    <div className=''>
                        <img src={image3} alt="" />
                        <p className='text-[#A98C64] ml-4 font-bold mb-2.5'><b>Завтрак: </b> 230/250 гр</p>
                        <p className='text-[#493E3E] ml-4 font-bold'>Утренний боул с перепелиным яйцом, киноа и лососем</p>
                    </div>
                    <div className=''>
                        <img src={image4} alt="" />
                        <p className='text-[#A98C64] ml-4 font-bold mb-2.5'><b>Обед: </b> 320/30 гр</p>
                        <p className='text-[#493E3E] ml-4 font-bold'>Боул с куриными фрикадельками в кунжуте, брокколи</p>
                    </div>
                    <div className=''>
                        <img src={image5} alt="" />
                        <p className='text-[#A98C64] ml-4 font-bold mb-2.5'><b>Полдник: </b> 50/30 гр</p>
                        <p className='text-[#493E3E] ml-4 font-bold'>Кукурузные блинчики с кокосовым припеком </p>
                    </div>
                    <div className=''>
                        <img src={image6} alt="" />
                        <p className='text-[#A98C64] ml-4 font-bold mb-2.5'><b>Ужин: </b> 100/100 гр</p>
                        <p className='text-[#493E3E] ml-4 font-bold'>Морепродукты в соусе Гарсия со стручковой фасолью</p>
                    </div>
                </div>
                <div className='md:flex items-center mt-15 justify-between bg-[#A2BE95] text-white p-8 rounded-4xl'>
                    <div>
                        <button className='text-white bg-[#4D8F76] font-bold py-2.5 px-6 rounded-3xl mb-2.5'>Заказать 10 дней питания за 16 000 ₽</button>
                        <p className='ml-10 font-bold'>1 250 ккал за 1 600 ₽ в день</p>
                    </div>
                    <img src={image7} alt="" />
                    <div className=''>
                        <h1 className='mb-3 font-bold text-xl'>Будем доставлять наборы каждый день.</h1>
                        <h1 className='font-bold'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа. <br />
                            Заявки принимаются не позднее, чем за день до предполагаемой доставки.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompTwoGo
