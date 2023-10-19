import { useLoaderData } from "react-router-dom";
import ProductCars from "../ProductCars/ProductCars";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  const carBrand = useLoaderData();
  console.log(carBrand);
  // const { brandName } = carBrand;
  return (
    <div>
      <Swiper
        // install Swiper modules
        className="h-screen"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div className="bg-[url('/images/ad1.jpg')] h-screen bg-cover bg-no-repeat bg-top"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/ad2.png')] h-screen bg-cover bg-no-repeat bg-top"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/ad3.jpg')] h-screen bg-cover bg-no-repeat bg-top"></div>
        </SwiperSlide>
      </Swiper>
      {carBrand.length !== 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 my-20 gap-5">
          {carBrand.map((car) => (
            <ProductCars key={car.id} car={car}></ProductCars>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img src="/images/dataNotFound.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Products;
