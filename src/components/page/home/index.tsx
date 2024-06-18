import React from "react";
import Navigation from "@/components/common/Navigation";
import HomePageDesktop from "./sections/Desktop";
import Footer from "@/components/common/Footer";
import ContactSection from "./sections/ContactSection";
import Mobile from "./sections/Mobile";

const index: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-[10px]">
        <Navigation />
      </div>
      <div className="hidden laptop:block">
        <HomePageDesktop />
      </div>
      <div className="block laptop:hidden">
        <Mobile />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default index;
