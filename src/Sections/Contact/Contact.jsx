import React from "react";
import ReachMe from "./ReachMe";
import { Typography } from "@material-tailwind/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-28 container mx-auto">
      <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
        Contact
      </Typography>
      <ReachMe />
      <ContactForm />
    </section>
  );
};

export default Contact;
