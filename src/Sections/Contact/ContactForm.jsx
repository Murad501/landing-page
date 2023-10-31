import {
  Button,
  Input,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Thank you for contacting us!");
        formData.reset()
        setFormData(null)
      }, 2000);
    }
  }, [isLoading]);

  const handleContact = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    setFormData(form)
    console.log(email, message, name);
  };
  return (
    <section className="mt-10">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          OR MAIL ME!
        </Typography>
        <Typography className="text-center font-medium text-blue-gray-700 max-w-5xl mx-auto">
          For further questions, including partnership opportunities, please
          email murad.hossain5501@gmail.com or contact using our contact form.
        </Typography>
      </div>
      <form onSubmit={handleContact}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <Input
            name="name"
            color="blue-gray"
            type="text"
            variant="static"
            required
            label="Name"
            placeholder="Enter Your Full Name"
            className="text-blue-gray-700"
          />
          <Input
            name="email"
            color="blue-gray"
            type="email"
            variant="static"
            required
            label="Email"
            placeholder="Enter Your Email"
            className="text-blue-gray-700"
          />
        </div>
        <Textarea
          name="message"
          color="blue-gray"
          variant="static"
          required
          label="Message"
          placeholder="Write Something..."
          className="text-blue-gray-700"
        />
        <div className="flex justify-end">
          <Button
            variant="outlined"
            type="submit"
            disabled={isLoading}
            className={`border-blue-gray-700 text-blue-gray-700 rounded-sm mt-5 focus:ring-0 ${
              isLoading && "px-[37px] py-2"
            }`}
          >
            {isLoading ? <Spinner color="blue-gray" /> : "Submit"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
