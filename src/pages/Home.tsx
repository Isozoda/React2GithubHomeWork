import React from 'react'

import image2 from "../assets/porapoest-top 1.png"
import Comp1 from '../components/comp1'
import image3 from "../assets/Group.svg"
import image4 from "../assets/Frame.svg"
import CompTwoGo from '../components/CompTwoGo'
import Comp3ONashem from '../components/Comp3ONashem'
import CompPropsPoprubite from '../components/compPropsPoprubite'

import image6 from "../assets/Mask Group.png"
import MapComponents from '../components/MapComponents'
import Warch from '../components/Warch'
import WomenComp from '../components/WomenComp'

const Home = () => {
  return (
    <div className=''>
      <div className='md:flex w-[90%] md:mt-auto mt-10 mb-15 m-auto items-center justify-between'>
        <div className=''>
          <h1 className='text-[#000000] mb-15 md:mb-20 font-bold text-xl md:text-5xl'>Доставка прогрессивного <br />
            питания для гурманов</h1>
          <div className='flex items-center mb-10 gap-8'>
            <button className='py-2.5 px-5 md:text-[16x] text-xs bg-[#4D8F76] text-white rounded-4xl'>Подобрать питание</button>
            <button className='py-2.5 px-5 md:text-[16x] text-xs border border-[#4D8F76] text-[#4D8F76] rounded-4xl'>Получить консультацию</button>
          </div>
        </div>
        <img src={image2} alt="" />
      </div>
      <Comp1 style="flex-row" img={image3} name="Еда, которая сделает тебя лучше!" p1="Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы." p2="Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня." />
      <Comp1 style="flex-row-reverse" img={image4} name="Изысканное меню высокой кухни" p1="В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус." p2="Качественные продукты, деликатесы и суперфуды, которые помогают  поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты." />
      <CompTwoGo />
      <Comp3ONashem />
      <CompPropsPoprubite img={image6} />
      <MapComponents />
      <Warch />
      <WomenComp />
      <div className='w-[90%] md:mb-25 mt-21 m-auto'>
        <h1 className='text-4xl font-bold mb-12'>Пробный рацион</h1>
        <p className='text-[#493E3E] mb-10 font-semibold'>Сомневаетесь? Протестируйте наш сервис и еду. <br />
          Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200 ккал)</p>
          <button className='text-white rounded-4xl font-bold py-3 px-13 bg-[#4D8F76]' >Попробовать</button>
      </div>
    </div>
  )
}

export default Home
