import React, { useRef } from "react";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MainHeading from "./Components/MainHeading";
import HeroImage from "./Components/HeroImage";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const App = () => {
  const scrollDownRef = useRef();

  useGSAP(() => {
    gsap.from(scrollDownRef.current, {
      y: 100,
      duration: 1.6,
      delay: 1.5,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
    });
  });
  return (
    <div className="h-[2050vh]">
      <header className="h-[100vh]">
        <div className="xl:h-[90%] xl:flex flex-col justify-between">
          <NavBar></NavBar>
          <div className="heroGrid">
            <div className="mt-[60px] ml-[35px] md:ml-[55px] xl:mt-[30px]">
              <MainHeading></MainHeading>
            </div>
            <div className="self-end ">
              <HeroImage></HeroImage>
            </div>
          </div>
        </div>
        <h3 className="hidden ml-[35px] md:ml-[55px] xl:block">
          <span ref={scrollDownRef}>Scroll Down</span>
        </h3>
      </header>
    </div>
  );
};

export default App;
