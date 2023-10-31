import { Typography } from "@material-tailwind/react";
import React from "react";
import { TiLocation } from "react-icons/ti";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const ReachMe = () => {
  return (
    <section>
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          REACH ME
        </Typography>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-5">
        <div className="grid grid-cols-1 gap-4 justify-center items-center">
          <TiLocation className="text-5xl text-blue-gray-700 mx-auto " />
          <Typography className="font-medium text-center  text-blue-gray-500 pb-2 mb-3">
            Pabna Sadar, Pabna
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-center items-center">
          <AiTwotonePhone className="text-5xl text-blue-gray-700 mx-auto" />
          <Typography className="font-medium text-center  text-blue-gray-500 pb-2 mb-3">
            +880 1755-845501
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-center items-center">
          <MdEmail className="text-5xl text-blue-gray-700 mx-auto" />
          <Typography className="font-medium text-center  text-blue-gray-500 pb-2 mb-3">
            murad.hossain5501@gmail.com
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-center items-center">
          <BsFillHandThumbsUpFill className="text-5xl text-blue-gray-700 mx-auto" />
          <Typography className="font-medium text-center  text-blue-gray-500 pb-2 mb-3">
            Freelance Available
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ReachMe;
