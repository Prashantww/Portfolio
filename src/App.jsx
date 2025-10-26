import React, { useRef } from "react";
import NavBar from "./Components/NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MainHeading from "./Components/MainHeading";
import HeroImage from "./Components/HeroImage";
import { CustomEase } from "gsap/CustomEase";
import SectionTitle from "./Components/SectionTitle";
import { HiArrowLongDown } from "react-icons/hi2";
import { SplitText } from "gsap/SplitText";
import GridGallery from "./Components/GridGallery";

gsap.registerPlugin(CustomEase, SplitText);

const App = () => {
  const scrollDownRef = useRef(null);
  const arrowRef = useRef(null);
  const arrowTriggerRef = useRef(null);

  useGSAP(() => {
    gsap.from(scrollDownRef.current, {
      y: 100,
      duration: 1.6,
      delay: 0.5,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
    });

    gsap.from(arrowRef.current, {
      opacity: 0,
      duration: 1.3,
      delay: 1,
      scrollTrigger: {
        trigger: arrowTriggerRef.current,
        start: "top bottom",
        // markers: true,
      },
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    tl.to(arrowRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.to(arrowRef.current, {
      y: 10,
      duration: 1,
      ease: "bounce.out",
      // delay: 0.2,
    });

    document.fonts.ready.then(() => {
      const split = SplitText.create(".flexingPara", {
        type: "lines",
        mask: "lines",
        onSplit(self) {
          gsap.from(self.lines, {
            y: "100%",
            duration: 1,
            stagger: 0.05,
            ease: "power2.out",
            // delay: 1,
            scrollTrigger: {
              trigger: ".flexingPara",
              start: "top 87%",
              // markers: true,
            },
            // onComplete: () => self.revert(),
          });
        },
      });
    });
  });
  return (
    <div className="h-[2050vh]">
      <header className="xl:h-[100vh]">
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
      <main>
        <div className="w-full flex flex-col items-center">
          <section className="w-full flex flex-col items-center">
            <div
              ref={arrowTriggerRef}
              className="mt-[140px] md:mt-[100px] xl:mt-[70px] flex flex-col items-center"
            >
              <SectionTitle textAlignment="center">
                Featured <br />
                work
              </SectionTitle>
              <div className="mt-[15px] md:mt-[30px]">
                <div ref={arrowRef}>
                  <HiArrowLongDown className="text-[22px] md:text-[30px]" />
                </div>
              </div>
            </div>
            <p className="flexingPara mt-[12px] md:mt-[24px]">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>
          </section>
          <section className="w-full flex flex-col items-center">
            <div className="w-full mt-[50px] md:mt-[70px] lg:mt-[80px] xl:mt[50px]">
              <GridGallery></GridGallery>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
