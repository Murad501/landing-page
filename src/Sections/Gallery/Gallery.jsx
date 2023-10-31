import { Typography } from "@material-tailwind/react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = [
    {
      src: "https://i1.adis.ws/i/canon/canon-get-inspired-ossi-saarinen-urban-nature-photography-story-1-1920x1080?qlt=80&w=1920&sm=aspect&aspect=16:9&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)",
    },
    {
      src: "https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1625552066/Hamstech%20App/Photography-Courses-Hamstech/Photography-Courses-Hamstech.jpg?_i=AA",
    },
    {
      src: "https://static.boredpanda.com/blog/wp-content/uploads/2019/06/photography-tips-tricks-jordi-puig-26-5d15cc7344517__700.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",
    },
    {
      src: "https://www.markgray.com.au/images/gallery/large/infinite.jpg",
    },
    {
      src: "https://www.creativelive.com/blog/wp-content/uploads/2018/11/Long-exposure-seattle-traffic-Ironside-e1541550981179.jpg",
    },
    {
      src: "https://storage.googleapis.com/website-zkhiphani/uploads/2021/09/be0f9646-nature-photography.jpg",
    },
    {
      src: "https://www.jdinstitute.edu.in/media/2021/05/grouping-1024x687.jpeg",
    },
    {
      src: "https://i.pinimg.com/originals/07/7f/7f/077f7fbcda71bfaa5ec29867db471ef5.jpg",
    },
    {
      src: "https://anegabawa.com/wp-content/uploads/2019/11/64I7954-red-outdoor-2-3-4-years-toddler-outdoor-photo-shoot-delhi-anega-bawa-photography-baby-gurgaon.jpg",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
          Gallery
        </Typography>
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          Experience the Visual Delight
        </Typography>
        <Typography className="text-center font-medium text-blue-gray-700 max-w-5xl mx-auto">
          Step into our gallery and experience the power of photography. We
          capture moments, not shots. Let our images speak to your soul and take
          you on a visual journey you won&apos;t forget.
        </Typography>
      </div>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:grid-rows-3">
          {images.map((item, index) => (
            <div
              key={index}
              className={`${index === 0 && "lg:col-span-2"} ${
                index === 9 && "lg:col-span-2"
              } cursor-pointer`}
            >
              <PhotoView src={item.src}>
                <img
                  src={item.src}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
