import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.titleAndLinks}>
        <h1>ARMAGEDDON V</h1>
        <ul className={styles.links}>
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>
              Астероиды
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/to-destroy/"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Уничтожение
            </NavLink>
          </li>
        </ul>
      </div>
      <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
    </header>
  );
}
