import { useRef } from "react";
import React from "react";
import styles from "./HeroImage.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const HeroImage = () => {
  const matte = useRef(null);

  useGSAP(() => {
    gsap.from(matte.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.6,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
      delay: 0.7,
    });
  });

  return (
    <div ref={matte} className={styles.imageContainer}>
      <img className={styles.image} src="/Images/Profile.png" alt="" />
    </div>
  );
};

export default HeroImage;
