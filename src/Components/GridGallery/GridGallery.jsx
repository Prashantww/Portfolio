import React from "react";
import styles from "./GridGallery.module.css";

const GridGallery = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.imgs} ${styles.portfolio}`}></div>
      <div className={`${styles.imgs} ${styles.hackUnited}`}></div>
      <div className={`${styles.imgs} ${styles.nFT}`}></div>
      <div className={`${styles.imgs} ${styles.testimonial}`}></div>
    </div>
  );
};

export default GridGallery;
