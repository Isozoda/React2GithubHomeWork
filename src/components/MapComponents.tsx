import React from 'react'


const MapComponents = () => {
    return (
        <div>
            <div className="bg-[#F4EDDE] w-[90%] justify-between items-center m-auto rounded-3xl p-10 md:flex my-10">
                <div className="md:w-[60%] md:mb-auto mb-10">
                    <h2 className="text-3xl font-bold mb-7">Карта доставки</h2>
                    <p className="text-[#493E3E] mb-7">
                        Доставка осуществляется каждый день с 06:00 до 12:00.
                        <br />
                        Выбор интервала — 2 часа.
                    </p>
                    <div className="rounded-2xl overflow-hidden h-[420px]">
                        <iframe
                            src="https://www.google.com/maps?q=Dushanbe&output=embed"
                            width="100%"
                            height="580px"
                            style={{ border: 0 }}
                            loading="lazy"></iframe>
                    </div>
                </div>
                <div className="md:w-[320px] flex flex-col gap-4">
                    <button className="border-2 border-green-500 text-green-600 rounded-full py-3">
                        По городу бесплатно
                    </button>
                    <button className="border-2 border-blue-500 text-blue-600 rounded-full py-3">
                        Пригород 25 км — 100 ₽
                    </button>
                    <button className="border-2 border-yellow-500 text-yellow-600 rounded-full py-3">
                        Пригород 35 км — 300 ₽
                    </button>
                    <button className="border-2 border-red-500 text-red-600 rounded-full py-3">
                        Пригород 50 км — 500 ₽
                    </button>
                    <p className="text-gray-500 mt-4">
                        Уточните стоимость и время доставки
                    </p>
                    <p className="font-bold text-lg">
                        +7 988 500-1-700
                    </p>
                    <button className="bg-green-600 text-white rounded-full py-3">
                        Перезвоните мне
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MapComponents
