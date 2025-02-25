const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function genNumber(min: number, max: number): number {
    return min + (Math.floor(Math.random() * (max - min + 1))); 
}

export function genEnglishLetter(): string {
    return englishLetters[genNumber(0, englishLetters.length - 1)];
}

export function genDate(min: Date, max: Date): Date {
    return new Date(genNumber(min.getTime(), max.getTime()));
}

export function genBool(): boolean {
    return Math.random() >= 0.5;
}