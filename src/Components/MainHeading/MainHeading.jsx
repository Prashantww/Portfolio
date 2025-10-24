import React, { useRef } from "react";
import styles from "./MainHeading.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

const MainHeading = () => {
  const mainTitle = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    gsap.from(mainTitle.current, {
      y: "100%",
      duration: 1.3,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
    });

    gsap.from(subTitle.current.querySelectorAll("span"), {
      y: "100%",
      duration: 1.3,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
      stagger: 0.15,
    });
  });

  return (
    <div>
      <h1 className={styles.heading}>
        <span ref={mainTitle}>Prashant</span>
      </h1>
      <div ref={subTitle} className={styles.subContainer}>
        <h2 className={styles.subHeading}>
          <span>Freelance</span>
        </h2>
        <h2 className={styles.subHeading}>
          <span>Frontend</span>&nbsp;
          <span>Developer</span>
        </h2>
      </div>
    </div>
  );
};

export default MainHeading;
