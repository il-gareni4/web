import { Asteroid } from '../../types/asteroid';
import { genBool, genDate, genEnglishLetter, genNumber } from './base';

function genAsteroidName(): string {
    return genNumber(2021, 2024) + " " + genEnglishLetter() + genEnglishLetter();
}

export function genAsteroidCard(): Asteroid {
    const name = genAsteroidName();
    return {
        id: name,
        name,
        date: genDate(new Date(2021, 1), new Date()),
        distance: {
            km: genNumber(1_000_000, 10_000_000),
            lunar: genNumber(1_000, 10_000)
        },
        size: genNumber(50, 2000),
        isDangerous: genBool()
    }
}

export function genMultipleAsteroidCards(count: number): Asteroid[] {
    const asteroids: Asteroid[] = [];
    for (let i = 0; i < count; i++) asteroids.push(genAsteroidCard());
    return asteroids;
}