import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full">
        <img loading="lazy" src="/images/slider/img-2.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img loading="lazy" src="/images/slider/img-3.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img loading="lazy" src="/images/slider/img-4.jpg" />
      </div>
    </div>
  );
};

export default Slider;
