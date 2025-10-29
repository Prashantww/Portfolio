import React from "react";
import { useRef } from "react";
import styles from "./GridGallery.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GridGallery = () => {
  const gridContainerRef = useRef(null);

  useGSAP(() => {
    const parents = gridContainerRef.current.querySelectorAll(
      `.${styles.imgs}`
    );

    parents.forEach((parent) => {
      const img = parent.querySelector("img");

      if (!img) return;

      gsap.to(img, {
        y: 70,
        scrollTrigger: {
          trigger: parent,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          scrub: true,
        },
      });
    });
  });

  return (
    <div ref={gridContainerRef} className={styles.gridContainer}>
      <div className={`${styles.imgs} ${styles.portfolio}`}>
        <img src="/Images/portfolio.png" alt="" />
      </div>
      <div className={`${styles.imgs} ${styles.hackUnited}`}>
        <img src="/Images/hackUnited.png" alt="" />
      </div>
      <div className={`${styles.imgs} ${styles.nFT}`}>
        <img src="/Images/nFT.png" alt="" />
      </div>
      <div className={`${styles.imgs} ${styles.testimonial}`}></div>
    </div>
  );
};

export default GridGallery;
