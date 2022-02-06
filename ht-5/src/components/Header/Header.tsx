import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <span className={styles.header__logo}>my</span>
      <ul className={styles.header__menu}>
        <li>
          <NavLink className={styles.header__menu_link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__menu_link} to="/SecondPage">
            SecondPage
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__menu_link} to="/ThirdPage">
            ThirdPage
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.header__menu_link} to="/Search">
            Search
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
// commit
