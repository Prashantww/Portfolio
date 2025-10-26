import React, { useRef } from "react";
import styles from "./SectionTitle.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ children, textAlignment = "left" }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current.querySelectorAll(".word"), {
      y: "100%",
      duration: 1.3,
      stagger: 0.1,
      delay: 0.2,
      ease: CustomEase.create("custom", "M0,0 C0.503,0 0.091,1 1,1 "),
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom",
        markers: true,
      },
    });
  });

  return (
    <h2
      ref={titleRef}
      className={styles.sectionTitle}
      style={{ textAlign: `${textAlignment}` }}
    >
      {React.Children.toArray(children).map((child, i) => {
        if (typeof child === "string") {
          return child.split(" ").map((word, j) => (
            <span key={`${i}-${j}`} className={styles.wordMask}>
              <span className="word">{word} </span>
            </span>
          ));
        }
        return child;
      })}
    </h2>
  );
};

export default SectionTitle;
