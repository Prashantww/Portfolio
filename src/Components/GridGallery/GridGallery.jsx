import React from "react";
import styles from "./GridGallery.module.css";

const GridGallery = () => {
  return (
    <div className={styles.gridContainer}>
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
