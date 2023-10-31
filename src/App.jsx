import React from "react";
import { PageNavbar } from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import { Footer } from "./Sections/Footer/Footer";
import Pricing from "./Sections/Pricing/Pricing";
import WhatClientSay from "./Sections/WhatClientSay/WhatClientSay";


export default function App() {
  return (
    <div className="container mx-auto">
      <PageNavbar />
      <Hero/>
      <Pricing />
      <WhatClientSay/>
      <Footer/>
    </div>
  );
}
