import React, { useRef } from "react";
import styles from "./NavBar.module.css";
import gsap from "gsap";

const ActionLink = ({ link = "#", text }) => {
  const linkRef = useRef();

  const handleEnter = () => {
    gsap.to(linkRef.current.querySelectorAll("a"), {
      y: "-100%",
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(linkRef.current.querySelectorAll("a"), {
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={linkRef}
      className="flex flex-col h-[30px] overflow-hidden cursor-pointer"
    >
      <a href={`${link}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {text}
      </a>
      <a href={`${link}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {text}
      </a>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <h3>Prashant Warghude</h3>

      <div className={`${styles.actions} flex gap-6`}>
        <ActionLink text="Work" />
        <ActionLink text="About" />
        <ActionLink text="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;
