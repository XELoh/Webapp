import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.leftPanel}>
      <h1>LOGO</h1>
      <ul className={styles.menu}>
        <li>Events</li>
        <li>Features</li>
        <li>Community</li>
        <li>Catalogue</li>
      </ul>
    </div>
    <img src="" alt="profile" />
  </div>
);

export default Navbar;
