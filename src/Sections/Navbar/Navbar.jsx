import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <Navbar className="mx-auto container px-6 py-3 shadow-none border-b-2 border-b-gray-300 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navList.map((list, idx) => (
              <Typography
                key={idx}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
              >
                <a
                  href="#"
                  className="flex items-center hover:text-blue-500 transition-colors"
                >
                  {list.name}
                </a>
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
      <Collapse open={openNav}>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {navList.map((list, idx) => (
            <Typography
              key={idx}
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium"
            >
              <a
                href="#"
                className="flex items-center hover:text-blue-500 transition-colors"
              >
                {list.name}
              </a>
            </Typography>
          ))}
        </ul>
      </Collapse>
    </Navbar>
  );
}
