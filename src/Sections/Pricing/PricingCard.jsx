/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingCard({data}) {
  return (
    <Card
      variant="gradient"
      className={`w-full  p-8 mx-auto text-blue-gray-800 rounded-sm hover:scale-[1.02]  transition-all cursor-pointer border border-blue-gray-100 hover:bg-blue-gray-100 ${data?.id === 2 && "bg-blue-gray-100"}`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="small" className="font-normal uppercase">
          {data?.type}
        </Typography>
        <Typography
          variant="h1"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>{data.price}{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
            {data?.values?.map((value, idx) => <li key={idx} className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">{value}</Typography>
          </li>)}
          
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button size="lg" ripple={false} fullWidth={true} className="border border-blue-gray-100 rounded-sm bg-transparent text-blue-gray-800">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
