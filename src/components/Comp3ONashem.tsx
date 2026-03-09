import React from 'react'
import image1 from "../assets/Group 39.png"
import image2 from "../assets/Group 40.png"
import image3 from "../assets/Group 41.png"
import image5 from "../assets/Group 42.png"
import image6 from "../assets/Group (1).png"
import image4 from "../assets/Group.png"

const Comp3ONashem = () => {
    return (
        <div className='w-[90%] mt-20 m-auto'>
            <section>
                <h1 className='text-[#000000] font-bold text-4xl mb-13'>О нашем сервисе</h1>
                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image1} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Мы используем деликатные технологии приготовления блюд</h1>
                        <p className='text-[#493E3E] font-semibold'>Сухой гриль без прямого контакта продукта <br />
                            с жарочной поверхностью, запекание, су-вид</p>
                    </div>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image2} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Меню из 90 блюд на две недели без повтора</h1>
                        <p className='text-[#493E3E] font-semibold'>Сбалансированные блюда, содержащие в себе все необходимые элементы за счёт большого количества компонентов</p>
                    </div>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image3} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Здоровые рецепты</h1>
                        <p className='text-[#493E3E] font-semibold'>Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки.</p>
                    </div>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image4} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Гарантия возврата</h1>
                        <p className='text-[#493E3E] font-semibold'>100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели</p>
                    </div>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image5} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Контроль температуры</h1>
                        <p className='text-[#493E3E] font-semibold'>Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим от 2°C до 4°C от кухни до ваших рук</p>
                    </div>
                    <div className='shadow p-8 rounded-3xl'>
                        <img src={image6} alt="" />
                        <h1 className='text-[#493E3E] font-bold text-xl my-5'>Забота о природе</h1>
                        <p className='text-[#493E3E] font-semibold'>Все блюда доставляем в экоупаковке из крафтового картона со столовыми приборами  из кукурузного крахмала</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Comp3ONashem
