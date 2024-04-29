import React from "react";
import styles from "./AsteroidCard.module.css";
import AsteroidSvg from "./svg/AsteroidSvg";

export default function AsteroidCard({ name, date, distance, size, isDangerous, distanceMode }) {
  return (
    <div className={`${styles.card} ${isDangerous ? styles.red : styles.regular}`}>
      <AsteroidSvg className={styles.asteroidImage} />
      <div className={styles.content}>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
          <div>{`Дата: ${date.toLocaleDateString()}`}</div>
          <div>Расстояние: {distance[distanceMode]} {distanceMode === "km" ? "км" : "расстояний до луны"}</div>
          <div>{`Размер: ${size} м`}</div>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.actionGrade}>{`Оценка: ${
          isDangerous ? "опасен" : "не опасен"
        }`}</div>
        <button className={styles.actionButton}>На уничтожение</button>
      </div>
    </div>
  );
}
