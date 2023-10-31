import React, { useEffect, useState } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LuGalleryVerticalEnd } from "react-icons/lu";

export function PageNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navigateToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = [
    {
      name: "Home",
      link: () => navigateToSection("#hero"),
    },
    {
      name: "Shop",
      link: () => navigateToSection("#shop"),
    },
    {
      name: "Gallery",
      link: () => navigateToSection("#gallery"),
    },
    {
      name: "Our Clients",
      link: () => navigateToSection("#our-clients"),
    },
    {
      name: "Pricing",
      link: () => navigateToSection("#pricing"),
    },
    {
      name: "Testimonials",
      link: () => navigateToSection("#testimonials"),
    },
    {
      name: "Blogs",
      link: () => navigateToSection("#blogs"),
    },
    {
      name: "Contact",
      link: () => navigateToSection("#contact"),
    },
  ];

  return (
    <Navbar className="container mx-auto px-6 py-5 shadow-none border-b-2 border-b-gray-300 rounded-none z-30 sticky top-0">
      <div className="flex items-center justify-between text-blue-gray-900 relative ">
        <LuGalleryVerticalEnd className="text-4xl text-blue-gray-700" />
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList.map((list, idx) => (
              <Typography
                key={idx}
                onClick={list.link}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold cursor-pointer hover:text-blue-gray-700 transition-colors"
              >
                {list.name}
              </Typography>
            ))}
          </ul>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {openNav ? (
        <div className="text-black bg-white absolute right-0 p-2 lg:hidden border top-12 w-40 rounded-sm">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList.map((list, idx) => (
              <Typography
                key={idx}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium  hover:text-blue-gray-700 transition-colors cursor-pointer"
              >
                {list.name}
              </Typography>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </Navbar>
  );
}
