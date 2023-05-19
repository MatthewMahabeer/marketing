import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `url('/degree2.png')`,
        width: "100%",
        height: "100%",
      }}
    >
      <h1 className={styles.title}>Your Title</h1>
    </div>
  );
};

export default Header;
