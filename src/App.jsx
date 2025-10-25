import React from "react";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MainHeading from "./Components/MainHeading";
import HeroImage from "./Components/HeroImage";

const App = () => {
  useGSAP();
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
      </header>
    </div>
  );
};

export default App;
