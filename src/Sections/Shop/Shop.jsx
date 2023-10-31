import { Typography } from "@material-tailwind/react";
import React from "react";
import { Product } from "./Product";

const Shop = () => {
  const products = [
    {
      name: "Canon EOS 5D Mark IV",
      price: 2499.99,
      short_description:
        "The Canon EOS 5D Mark IV is a top-notch full-frame DSLR camera with a 30.4MP sensor and 4K video capabilities. Capture your photographic vision with outstanding image quality.",
      image:
        "https://images.squarespace-cdn.com/content/v1/579bbd35b3db2bfbd63eb3ae/a0074af4-cb18-4451-8299-f5082feb51c2/canon5dmarkivreview.jpg",
    },
    {
      name: "Sigma 35mm f/1.4 Art Lens",
      price: 899.0,
      short_description:
        "The Sigma 35mm f/1.4 Art Lens is a prime lens that delivers exceptional sharpness and beautiful bokeh. It's a must-have for portrait and low-light photography.",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/Sigma_340_101_35mm_f_1_4_DG_HSM_898831.jpg",
    },
    {
      name: "DJI Mavic Air 2 Drone",
      price: 799.99,
      short_description:
        "Elevate your aerial photography with the DJI Mavic Air 2 Drone. It features a 48MP camera, 4K video, and intelligent shooting modes for breathtaking aerial shots.",
      image:
        "https://wish.lk/wp-content/uploads/2022/03/dji-mavic-air-2-3.jpeg",
    },
  ];

  return (
    <section className="py-20 container mx-auto">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
          Shop
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mx-auto">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
