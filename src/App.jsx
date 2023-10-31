import React from "react";
import { PageNavbar } from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import { Footer } from "./Sections/Footer/Footer";
import Pricing from "./Sections/Pricing/Pricing";
import WhatClientSay from "./Sections/WhatClientSay/WhatClientSay";
import Contact from "./Sections/Contact/Contact";
import { Toaster } from "react-hot-toast";
import OurClients from "./Sections/OurClients/OurClients";


export default function App() {
  return (
    <div className="container mx-auto">
      <PageNavbar />
      <Hero/>
      <OurClients/>
      <Pricing />
      <WhatClientSay/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  );
}
