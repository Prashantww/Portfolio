import React from "react";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  useGSAP();
  return (
    <>
      <NavBar></NavBar>
    </>
  );
};

export default App;
