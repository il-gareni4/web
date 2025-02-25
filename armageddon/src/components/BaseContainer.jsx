import React from "react";
import styles from "./BaseContainer.module.css";

export default function BaseContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
