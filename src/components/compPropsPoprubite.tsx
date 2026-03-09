import React from 'react'

interface Props {
    img: string
}

const CompPropsPoprubite = ({ img }: Props) => {
    return (
        <div className='w-[90%] mt-21 m-auto'>
            <div className='md:flex items-center justify-between'>
                <div className=''>
                    <h1 className='text-[#4D8F76] font-bold mb-8 text-2xl'>Попробуйте новый формат рационов — Боулы! <br />
                        Это богатый набор полезных веществ и масса вкусовых <br /> впечатлений!</h1>
                    <p className='text-[#493E3E] font-semibold mb-5 '>Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые <br /> элементы за счёт большого количества компонентов. Ингредиенты блюда не <br /> смешиваются между собой, а не спеша поедаются по отдельности.</p>
                    <p className='text-[#493E3E] font-semibold mb-5 '>Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к <br /> вашим дверям.
                    </p>
                    <p className='text-[#493E3E] font-semibold '>Наш сервис помогает экономить время, поддерживать стройность, <br /> работоспособность и укреплять здоровье.</p>
                </div>
                <img className='md:pr-15 md:mt-auto mt-10 w-full md:w-130 md:h-100' src={img} alt="" />
            </div>
        </div>
    )
}

export default CompPropsPoprubite
