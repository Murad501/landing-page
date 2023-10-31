import React from "react";
import { PricingCard } from "./PricingCard";
import { Typography } from "@material-tailwind/react";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      type: "Basic",
      price: 19,
      values: [
        "Quality Photos",
        "Gallery Access",
        "Standard Editing",
        "Booking",
        "Email Support",
      ],
    },
    {
      id: 2,
      type: "Standard",
      price: 29,
      values: [
        "High-Res Photos",
        "Wide Galleries",
        "Advanced Editing",
        "Priority Booking",
        "Phone & Email Support",
      ],
    },
    {
      id: 3,
      type: "Premium",
      price: 49,
      values: [
        "Unlimited Downloads",
        "Exclusive Galleries",
        "Custom Editing",
        "Event Priority",
        "Consultation",
      ],
    },
  ];

  return (
    <section className="py-20 container mx-auto">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
          Pricing
        </Typography>
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          DO YOU WANT ME TO SHOOT YOU?
        </Typography>
        <Typography className="text-center font-medium text-blue-gray-700 max-w-5xl mx-auto">
          Discover our photography packages and pricing options. We&apos;re here
          to capture your special moments, not shoot you! Explore our rates and
          find the perfect package for your photography needs.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mx-auto">
        {pricingData.map((data, idx) => (
          <PricingCard key={idx} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
