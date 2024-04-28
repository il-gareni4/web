const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function genNumber(min, max) {
    return min + (Math.floor(Math.random() * (max - min + 1))); 
}

export function genEnglishLetter() {
    return englishLetters[genNumber(0, englishLetters.length - 1)];
}

export function genDate(min, max) {
    return new Date(genNumber(min.getTime(), max.getTime()));
}

export function genBool() {
    return Math.random() >= 0.5;
}