import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { imagesSlider } from "../../utils/images";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Slider = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    // top: '-10rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "26rem",
    padding: 0,
    cover: true,
    // width: '200rem'
  };

  return (
    <div className="">
      <div className="absolute -left-8 -right-8 -top-5 lg:-left-5 lg:-right-5">
        <Splide
          className=""
          options={options}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
        >
          <div className="relative">
            <SplideTrack>
              {imagesSlider.map((image, i) => (
                <SplideSlide key={i} className="">
                  <img src={image} alt="" className="w-full object-cover" />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
     </div>
  );
};

export default Slider;
