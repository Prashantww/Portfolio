import React from "react";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MainHeading from "./Components/MainHeading";

const App = () => {
  useGSAP();
  return (
    <>
      <NavBar></NavBar>
      <div className="mt-[60px] ml-[35px] md:ml-[55px]">
        <MainHeading></MainHeading>
      </div>
    </>
  );
};

export default App;
