import React from "react";
import { PageNavbar } from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";

export default function App() {
  return (
    <div className="container mx-auto">
      <PageNavbar />
      <Hero/>
    </div>
  );
}
