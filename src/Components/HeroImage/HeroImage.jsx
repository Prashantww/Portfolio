import React from "react";
import styles from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src="/Images/Profile.png" alt="" />
    </div>
  );
};

export default HeroImage;
