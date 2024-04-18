import Image from "next/image";
import React from "react";
import { Carousel } from "antd";

import Slide1 from "@/assets/images/photos/card_img/card1.jpg";
import Slide2 from "@/assets/images/photos/card_img/card2.jpg";
import Slide3 from "@/assets/images/photos/card_img/card3.jpg";
import Slide4 from "@/assets/images/photos/card_img/card4.jpg";
import Slide5 from "@/assets/images/photos/card_img/card5.jpg";

const contentStyle = {
  height: "700px",
  background: "#f8ffff",
};

const Hero = () => {
  return (
    <section className="mt-28 container sm:mt-12">
      <Carousel autoplay>
        <div style={contentStyle}>
          <div className="max-w-[80%] mx-auto max-h-[490px] sm:max-h-[200px]">
            <Image
              src={Slide1}
              alt="slide img"
              className="max-w-[80%] block mx-auto rounded-[30px] max-h-[490px]"
            />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="max-w-[80%] max-h-[490px] mx-auto">
            <Image
              src={Slide2}
              alt="slide img"
              className="max-w-[80%] block mx-auto rounded-[30px]"
            />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="max-w-[80%] max-h-[490px] mx-auto">
            <Image
              src={Slide3}
              alt="slide img"
              className="max-w-[80%] block mx-auto rounded-[30px]"
            />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="max-w-[80%] max-h-[490px] mx-auto">
            <Image
              src={Slide4}
              alt="slide img"
              className="max-w-[80%] block mx-auto rounded-[30px]"
            />
          </div>
        </div>
        <div style={contentStyle}>
          <div className="max-w-[80%] max-h-[490px] mx-auto">
            <Image
              src={Slide5}
              alt="slide img"
              className="max-w-[80%] block mx-auto rounded-[30px]"
            />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
