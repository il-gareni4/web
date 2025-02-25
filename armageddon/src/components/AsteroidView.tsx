import React, { useEffect, useState } from "react";
import styles from "./AsteroidView.module.css";
import { genMultipleAsteroidCards } from "../mock/AsteroidCard";
import AsteroidCard from "./AsteroidCard";
import { extractAsteroidsData, getNearEarthObjects } from "../api/nasa";
import { getApiKey } from "../api/utils";
import { Asteroid } from "../../types/asteroid";

export default function AsteroidView() {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [showOnlyDangerous, setShowOnlyDangerous] = useState(false);
  const [distanceMode, setDistanceMode] = useState("km");

  const distanceModes = { km: "километрах", lunar: "дистанциях до луны" };

  useEffect(() => {
    getNearEarthObjects(getApiKey())
      .then((res) => res.json())
      .then(extractAsteroidsData)
      .then(setAsteroids)
      .catch((res) => {
        console.log(res);
        setAsteroids(genMultipleAsteroidCards(10));
      });
  }, []);

  return (
    <main>
      <div className={styles.settings}>
        <div>
          <input
            type="checkbox"
            name="onlyDangerous"
            id="onlyDangerousCheckbox"
            checked={showOnlyDangerous}
            onChange={(ev) => setShowOnlyDangerous(ev.target.checked)}
          />
          <label htmlFor="onlyDangerousCheckbox">Показать только опасные</label>
        </div>
        <div>
          <span>Расстояние в </span>
          {Object.entries(distanceModes).map(([mode, text]) => (
            <span
              key={mode}
              onClick={() => setDistanceMode(mode)}
              className={`${styles.distanceMode} ${mode === distanceMode ? styles.active : ""}`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.asteroidCards}>
        {asteroids
          .filter((asteroid) =>
            showOnlyDangerous ? asteroid.isDangerous : true
          )
          .map((asteroid) => (
            <AsteroidCard
              key={asteroid.id}
              distanceMode={distanceMode}
              {...asteroid}
            />
          ))}
      </div>
    </main>
  );
}
