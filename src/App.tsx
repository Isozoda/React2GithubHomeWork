import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const App = () => {
  const swiperRef = useRef(null);

  return (
    <div className="p-10 max-w-[600px] mx-auto">
      <div className="flex gap-3 mb-5 justify-center">
        <button
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
        >
          Prev
        </button>

        <button
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
        >
          Next
        </button>

        <button
          onClick={() => swiperRef.current?.swiper?.slideTo(2)}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
        >
          Go to 3
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={1500} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;