export type Asteroid = {
    id: string,
    name: string,
    date: Date,
    size: number
    distance: {
        km: number,
        lunar: number
    },
    isDangerous: boolean
}