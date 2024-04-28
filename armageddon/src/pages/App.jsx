import AsteroidCard from "../components/AsteroidCard";
import DefaultLayout from "../components/DefaultLayout";
import { genAsteroidCard } from "../mock/AsteroidCard";
import "./App.module.css";

function App() {
  const asteroids = [];
  for (let i = 0; i < 10; i++) asteroids.push(genAsteroidCard());

  return (
    <DefaultLayout>
      {asteroids.map((asteroid) =>
        <AsteroidCard
          key={asteroid.name}
          {...asteroid}
        />
      )}
    </DefaultLayout>
  );
}

export default App;
