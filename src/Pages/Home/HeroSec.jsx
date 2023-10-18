// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
const HeroSec = () => {
  return (
    <div>
      <Swiper
        className="h-screen"
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className="bg-[url('/images/heroBg.jpg')]  bg-cover bg-no-repeat bg-top">
            <div className="bg-black bg-opacity-75 h-screen flex items-center">
              <div className="text-center">
                <h1 className="text-5xl text-white font-bold">
                  Supercars <span className="text-[#ff7232]">Unleashed</span>{" "}
                </h1>
                <p className="text-white px-32 pt-7 font-bold">
                  Explore the world of supercars, where cutting-edge
                  engineering, high-speed capabilities, and jaw-dropping
                  aesthetics combine to create the ultimate driving experience.
                  From the Bugatti Chiron to the Lamborghini Aventador, we delve
                  into the realm of speed demons.Witness the revival of classic
                  muscle cars, with modern twists that make them faster and more
                  powerful than ever. Get behind the wheel of iconic models like
                  the Ford Mustang GT and Dodge Challenger Hellcat.
                </p>
                <button className="px-6 py-2 mt-7 font-bold bg-[#ff7232] text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/heroBg2.jpg')]  bg-cover bg-no-repeat bg-top">
            <div className="bg-black bg-opacity-75 h-screen flex items-center">
              <div className="text-center">
                <h1 className="text-5xl text-white font-bold">
                  Adventure<span className="text-[#ff7232]"> on Four</span>{" "}
                  Wheels
                </h1>
                <p className="text-white lg:px-32 md:px-20 px-12 pt-7 font-bold">
                  Explore the rise of the SUV and its transformation from a
                  family hauler to an adventure-ready vehicle. From the
                  versatile Subaru Outback to the rugged Toyota 4Runner,
                  discover the SUVs that are changing the way we
                  travel.Experience the pinnacle of automotive luxury with a
                  showcase of premium SUVs. From the sophisticated Range Rover
                  Velar to the sleek Porsche Cayenne, these vehicles offer an
                  exquisite blend of style, performance, and comfort.
                </p>
                <button className="px-6 py-2 mt-7 font-bold bg-[#ff7232] text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-[url('/images/heroBg3.jpg')]  bg-cover bg-no-repeat bg-top">
            <div className="bg-black bg-opacity-75 h-screen flex items-center">
              <div className="text-center">
                <h1 className="text-5xl text-white font-bold">
                  The Art of <span className="text-[#ff7232]"> Sports</span>
                </h1>
                <p className="text-white lg:px-32 md:px-20 px-12 pt-7 font-bold">
                  Dive into the engineering and design principles that make
                  sports cars some of the most visually captivating and
                  aerodynamically efficient vehicles on the road. Discover how
                  form and function collide in pursuit of speed.Trace the
                  evolution of sports cars, from the classic 1950s era to the
                  modern supercar landscape. This journey explores how these
                  high-performance vehicles have evolved over the years.
                </p>
                <button className="px-6 py-2 mt-7 font-bold bg-[#ff7232] text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSec;
