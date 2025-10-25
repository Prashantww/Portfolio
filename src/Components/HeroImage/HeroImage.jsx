import { useRef } from "react";
import React from "react";
import styles from "./HeroImage.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const HeroImage = () => {
  const matte = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    // Initial animation
    gsap.from(matte.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.6,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1"),
      delay: 0.7,
    });

    // ScrollTrigger with matchMedia
    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        gsap.to(imgRef.current, {
          y: 70,
          scrollTrigger: {
            trigger: matte.current,
            start: "bottom 70%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      },
      "(min-width: 768px) and (max-width: 1023px)": function () {
        gsap.to(imgRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: matte.current,
            start: "bottom 90%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      },
      "(min-width: 1024px) and (max-width: 1279px)": function () {
        gsap.to(imgRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: matte.current,
            start: "bottom 80%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      },
      "(min-width: 1280px)": function () {
        gsap.to(imgRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: matte.current,
            start: "bottom 95%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      },
    });
    gsap.from(imgRef.current, {
      scale: 1.2,
      duration: 1.6,
      delay: 0.7,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1"),
    });
  });

  return (
    <div ref={matte} className={styles.imageContainer}>
      <img
        ref={imgRef}
        className={styles.image}
        src="/Images/Profile.png"
        alt=""
      />
    </div>
  );
};

export default HeroImage;
