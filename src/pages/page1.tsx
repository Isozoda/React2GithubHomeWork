import React from 'react'
import image2 from "../assets/107823765_764851841011463_3291585847262786341_n 1.png"
import CompTwoGo from '../components/CompTwoGo'
import Comp3ONashem from '../components/Comp3ONashem'
import CompPropsPoprubite from '../components/compPropsPoprubite'
import MapComponents from '../components/MapComponents'
import Warch from '../components/Warch'
import image6 from "../assets/Rectangle 29.png"
import image8 from "../assets/Ellipse 15.png"
import WomenComp from '../components/WomenComp'

import imageMap1 from "../assets/Group 158.png"
import imageMap2 from "../assets/Group 160.png"

import imageRatsion from "../assets/Ellipse 30.png"
import imageRatsion2 from "../assets/Ellipse 31.png"

const Page1 = () => {
  return (
    <div>
      <div className='md:flex w-[90%] mb-10 m-auto items-center justify-between'>
        <div className=''>
          <h1 className='text-[#000000] mb-5 font-bold text-2xl md:text-5xl'>Прогрессивное питание <br /> на каждый день</h1>
          <p className='text-[#493E3E] mb-13'>Сбалансированный рацион в  современном формате — Супер-боул</p>
          <div className='flex items-center gap-8'>
            <button className='py-2.5 px-5 bg-[#4D8F76] text-white rounded-4xl'>Подобрать питание</button>
            <button className='py-2.5 px-5 font-bold border border-[#4D8F76] text-[#4D8F76] rounded-4xl'>Получить консультацию</button>
          </div>
        </div>
        <img src={image2} alt="" />
      </div>
      <CompTwoGo />
      <Comp3ONashem />
      <CompPropsPoprubite img={image6} />
      <MapComponents />
      <div className='w-[90%] mb-18 m-auto'>
        <h1 className='text-4xl font-bold mb-12'>Акции</h1>
        <div className='md:flex items-center justify-between '>
          <div className='bg-[#EA9DA3] md:w-[48%] md:text-start text-center text-white md:flex grid mb-5 items-center justify-between rounded-4xl p-8 '>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold mb-8'>Наименование акции</h1>
              <p className='font-bold mb-15'>Краткое описание акции</p>
              <button className='text-white font-bold py-3 px-13 border border-white rounded-4xl'>Подробнее</button>
            </div>
            <img className='md:ml-auto ml-11' src={image8} alt="" />
          </div>
          <div className='bg-[#9898A0] md:w-[48%] md:text-start text-center text-white md:flex grid items-center justify-between rounded-4xl p-8 '>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold mb-8'>Наименование акции</h1>
              <p className='font-bold mb-15'>Краткое описание акции</p>
              <button className='text-white font-bold py-3 px-13 border border-white rounded-4xl'>Подробнее</button>
            </div>
            <img className='md:ml-auto ml-11' src={image8} alt="" />
          </div>
        </div>
      </div>
      <Warch />
      <WomenComp />
      <div className='w-[90%] mt-20 m-auto mb-25'>
        <h1 className='text-4xl font-bold mb-13'>Отзывы</h1>
        <div className='md:flex grid gap-5 items-center justify-between'>
          <img className='md:w-[48%]' src={imageMap1} alt="" />
          <img className='md:w-[48%]' src={imageMap2} alt="" />
        </div>
      </div>
      <div className='w-[90%] md:flex items-center justify-between mb-15 mt-21 m-auto'>
        <div className='mb-5'>
          <h1 className='text-4xl font-bold mb-12'>Пробный рацион</h1>
          <p className='text-[#493E3E] mb-10 font-semibold'>Сомневаетесь? Протестируйте наш сервис и еду. <br />
            Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200 ккал)</p>
          <button className='text-white rounded-4xl font-bold py-3 px-13 bg-[#4D8F76]' >Попробовать</button>
        </div>
        <img className='ml-8 md:ml-auto' src={imageRatsion} alt="" />
        <img className='md:relative md:right-25 md:inline hidden' src={imageRatsion2} alt="" />
      </div>
    </div>
  )
}

export default Page1
