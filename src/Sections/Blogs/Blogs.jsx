import { Typography } from "@material-tailwind/react";
import React from "react";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
  const blogs = [
    {
      title: "Capturing the Magic of Golden Hour",
      description:
        "Golden hour, that magical time just after sunrise or before sunset when the sunlight is soft, warm, and bathes the world in a beautiful glow, is a favorite among photographers. In this blog post, you'll dive deep into the art of capturing stunning photographs during the golden hour. We'll share tips and techniques for making the most of this enchanting time of day, from choosing the right locations to understanding the play of light and shadows. Get ready to elevate your photography to a new level of beauty.",
      image: "https://www.pangolinphoto.com/wp-content/uploads/2020/05/Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-scaled.webp",
      author: {
        name: "Emily Photographer",
        bio: "Passionate about photography, Emily enjoys chasing the perfect light to capture the beauty of the world. With years of experience, she has honed her skills in golden hour photography and is excited to share her knowledge with you.",
      },
    },
    {
      title: "Mastering Composition in Photography",
      description:
        "Composition is the language of photography, and mastering it is crucial for creating visually appealing and impactful photos. In this comprehensive blog post, we'll delve into the world of composition, from the rule of thirds to leading lines, framing, and more. You'll learn how to use these techniques to tell compelling visual stories through your photographs. Whether you're a beginner or an experienced photographer, understanding and applying the principles of composition will take your work to the next level.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
      author: {
        name: "Alex Lensman",
        bio: "Alex is a professional photographer with years of experience in composition and visual storytelling. His expertise in teaching composition has helped many photographers improve their skills and produce captivating images.",
      },
    },
    {
      title: "The Art of Street Photography",
      description:
        "Street photography is a captivating and raw genre that captures the essence of urban life. In this blog post, we'll explore the art of street photography, from the equipment and techniques used to the ethics of capturing candid moments in public spaces. You'll gain insights into approaching and photographing strangers, finding the beauty in the ordinary, and telling compelling stories through your images. Join us on a journey through the streets, where every moment is a potential masterpiece waiting to be captured.",
      image: "https://www.mickeyshannon.com/photos/hawaii-photography.jpg",
      author: {
        name: "Sarah Streetwise",
        bio: "Sarah is a seasoned street photographer with a keen eye for urban moments. Her work has been exhibited and published internationally, and she's eager to share her expertise and passion for street photography with you.",
      },
    },
  ];

  return (
    <section className="py-20 container mx-auto">
      <div className="mb-14">
        <Typography className="font-semibold uppercase text-center text-3xl text-blue-gray-700 mb-10">
          Blogs
        </Typography>
        <Typography className="font-semibold uppercase text-center text-lg text-blue-gray-700 border-b pb-2 mb-3">
          Latest Blogs
        </Typography>
        <Typography className="text-center font-medium text-blue-gray-700 max-w-5xl mx-auto">
        Explore fresh insights and tips in our latest blogs. Stay inspired and informed for your photography journey.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mx-auto">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
