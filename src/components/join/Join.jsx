import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { imagesSlider } from "../../utils/images";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";
// import data
import { imagesSlider2, joinData } from "../../datafiles/JoinData";

const Join = () => {
  // destructure join data
  const { subtitle, btnText } = joinData;

  return (
    <section className="bg-black py-10">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col md:flex-row gap-x-10">
          {/* image */}
          <div className="lg:w-[50%] w-[100%]">
            <Swiper
              className="testimonialSlider"
              navigation={true}
              autoplay={true}
              modules={[Navigation, Autoplay]}
            >
              {imagesSlider2.map((image, i) => (
                <SwiperSlide>
                  <div className="min-h-[200px] w-full">
                    <img src={image} alt="" className="w-full " />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* text */}
          <div className="">
            <h2 className="mb-4 text-xl font-semibold text-white lg:text-gray-400 md:text-[60px] capitalize md:leading-[62px]">
               wanna shop online with us? <span className="text-primary-200 "></span>{" "}
              join now
            </h2>
            <p className="max-w-[348px] text-white md:max-w-[470px] lg:mb-0 lg:max-w-[492px]">
              {subtitle}
            </p>
            <button className="btn-secondary mt-4">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
