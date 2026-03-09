import React from 'react'
import image1 from "../assets/image.png"
import { Link, Outlet } from 'react-router'

import logo from "../assets/Group 161.png"
import image2 from "../assets/Group 71.png"
import image3 from "../assets/Ellipse 25.png"
import image4 from "../assets/Group 73.png"
import iconFooterImage from "../assets/Group 74.png"

import imageHiddenInComputer from "../assets/Group 82.png"

import { useTheme } from "../components/ThemeContext";


const Layout = () => {

    const { toggleTheme } = useTheme();

    return (
        <div>
            <header className='sticky bg-white shadow-xl z-50 top-0 w-full'>
                <div className='bg-[#A98C64] mb-4 font-bold text-white py-3'>
                    <div className='md:w-[70%] w-[90%] m-auto flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img className='w-5 h-5' src={image1} alt="" />
                            <p className='md:text-2xl text-xl'>Скидка 20% на первый заказ</p>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="border px-4 py-2 rounded-xl"
                        >
                            Theme
                        </button>
                        <p className='text-2xl md:inline hidden'>Заказать →</p>
                    </div>
                </div>
                <div className='w-[90%] pb-5 flex m-auto justify-between items-center'>
                    <img src={logo} alt="" />
                    <div className='md:flex hidden items-center gap-8'>
                        <Link to={"/"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>Подбор рациона</p>
                        </Link>
                        <Link to={"/pitaniya"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>Программы питания</p>
                        </Link>
                        <Link to={"/about"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>О нас</p>
                        </Link>
                        <Link to={"/dostavka"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>Доставка</p>
                        </Link>
                        <Link to={"/aksiya"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>Акции</p>
                        </Link>
                        <Link to={"/faq"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>FAQ</p>
                        </Link>
                        <Link to={"/Otviz"}>
                            <p className='text-[#493E3E] font-bold text-[18px]'>Отзывы</p>
                        </Link>
                    </div>
                    <div className='text-end md:inline hidden'>
                        <p className='text-[#4D8F76] font-bold mb-2'>Перезвоните мне</p>
                        <h1 className='text-[#493E3E] font-bold text-2xl mb-1'>+7 988 500-1-700</h1>
                        <p className='text-[#756D6D] font-bold'>c 09:00 до 21:00</p>
                    </div>
                    <img className='md:hidden inline' src={imageHiddenInComputer} alt="" />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='py-10'>
                <div className='bg-[#B89683] mb-20 text-white w-[90%] m-auto p-8 rounded-4xl'>
                    <div className='md:flex justify-between items-center'>
                        <div className=''>
                            <h1 className='font-bold text-xl md:text-4xl mb-5'>Будьте всегда в курсе!</h1>
                            <div className='flex items-center gap-3'>
                                <img src={image2} alt="" />
                                <p className=''>Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и новостей!</p>
                            </div>
                        </div>
                        <div className='md:flex grid mt-5 items-center gap-5'>
                            <input type="text" placeholder='Укажите вашу почту' className='py-2.5 px-5 w-70 bg-white outline-none rounded-4xl text-[#756D6D]' />
                            <button className='bg-[#4D8F76] text-white font-semibold py-2.5 px-5 rounded-4xl'>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] m-auto'>
                    <div className='md:flex grid gap-5 mb-8 items-center justify-between'>
                        <div className=''>
                            <p className='text-[#493E3E] font-bold mb-1 text-2xl'>+7 988 500-1-700</p>
                            <p className='text-xs font-semibold text-[#756D6D] '>Ежедневно c 09:00 до 21:00</p>
                        </div>
                        <p className='text-[#493E3E] font-bold text-2xl'>hello@pora-poest.com</p>
                        <div className='flex items-center gap-8'>
                            <img src={image3} alt="" />
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                        </div>
                    </div>
                    <p className='text-[#493E3E] mb-8'>ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4</p>
                    <div className='md:flex grid gap-5 items-center justify-between'>
                        <div className=''>
                            <p className='text-[#493E3E] font-semibold mb-2.5'>© 2021 ПораПоесть — сервис доставки прогрессивного питания. </p>
                            <p className='text-[#756D6D]'>Фотографии блюд на сайте являются вариантом сервировки блюда. Внешний вид блюда может отличаться от фотографии на сайте.  <br />
                                Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями <span className='text-green-900 font-semibold'> Публичной оферты и Политикой конфедициальности</span></p>
                        </div>
                        <img src={iconFooterImage} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
