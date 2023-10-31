import { Typography } from "@material-tailwind/react";
import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { ClientSayCard } from "./ClientSayCard";

const WhatClientSay = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Bride",
      image: "alice.jpg",
      text: "I can't express how grateful I am for the stunning photos this photographer captured at my wedding. Every moment was beautifully preserved, and I will cherish these memories forever. Their attention to detail and ability to capture emotions is truly remarkable. I highly recommend their services.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Business Owner",
      image: "john.jpg",
      text: "Working with this photographer has been an absolute pleasure. They have a unique talent for creating images that tell a story. My family and I were blown away by the results. The professionalism and creativity they bring to each session are beyond compare. I would give them four thumbs up if I could!",
      rating: 4.5,
    },
    {
      name: "Sarah Davis",
      role: "Model",
      image: "sarah.jpg",
      text: "I'm incredibly satisfied with the photography services provided by this talented artist. From the moment we began our session, I felt at ease, and the results were beyond my expectations. The photos were not just pictures; they were an art form. I'm a repeat client for a reason!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Event Planner",
      image: "michael.jpg",
      text: "The photographer's work is nothing short of brilliant. They have an eye for capturing the most exquisite moments in a way that is breathtaking. The quality of the photos is outstanding, and their dedication to their craft is evident in every shot. I couldn't be happier with the results.",
      rating: 5,
    },
    {
      name: "Emily Wilson",
      role: "Fashion Designer",
      image: "emily.jpg",
      text: "My experience with this photographer was exceptional. They not only took amazing photos but also made the entire process enjoyable. Their creative direction and attention to detail are top-notch. I now have a collection of photos I'm proud to show off.",
      rating: 4.5,
    },
    {
      name: "Daniel Lee",
      role: "Event Organizer",
      image: "daniel.jpg",
      text: "I am more than pleased with the photography services provided. The photos speak for themselves, showcasing an incredible level of talent. This photographer's ability to capture the essence of a moment is remarkable. Their work made my event truly special.",
      rating: 4.5,
    },
    {
      name: "Olivia Taylor",
      role: "Art Gallery Curator",
      image: "olivia.jpg",
      text: "This team of photographers are true professionals. They exceeded all my expectations, and I am delighted with the results. The photos are not just pictures; they are works of art. I am extremely impressed and would not hesitate to recommend their services to anyone.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="pt-28 container mx-auto">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
          Testimonials
        </Typography>
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          WHAT MY CLIENTS SAY
        </Typography>
      </div>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={20}
        breakpoints={{
          200: {
            // width: 640,
            slidesPerView: 1,
          },

          900: {
            // width: 768,
            slidesPerView: 2,
          },
          1300: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials?.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <ClientSayCard key={idx} testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatClientSay;
