import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  const slideItems = [
    {
      image:
        "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 4",
      description: "Description 1",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1696544014078-0099c3b9ea78?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 1",
      description: "Description 1",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1686779700813-b90332d58a72?auto=format&fit=crop&q=80&w=1934&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 2",
      description: "Description 1",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1690446901279-7855ff5af591?auto=format&fit=crop&q=80&w=1947&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 3",
      description: "Description 1",
    },
  ];

  return (
    <div id="hero z-0">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-h-[600px]"
      >
        {slideItems.map((item, idx) => (
          <SwiperSlide key={idx} className="min-h-[500px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {item.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
