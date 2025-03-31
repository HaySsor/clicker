export type UpgradeElementType = {
    name: string[];
    value: number,
    id: number,
    nextLvlCost: number[],
    isMaxUpgrade: boolean,
}


export const UpgradesDeFault: { [key: string]: UpgradeElementType } = {
    buttonClass: {
        name: ['Podstawowy Przycisk', 'Ładniejszy Przycisk', 'Fajny Przycisk', 'WOW Przycisk', 'Sigma Przycisk'],
        value: 0,
        id: 1,
        nextLvlCost: [0, 10, 35, 50, 100],
        isMaxUpgrade: false
    },
    additionMultiplier: {
        name: ['+1 Byku', '+2 Byczku', 'ohoho + 3', 'Najjs + 4', 'Click x 5 ', 'Click x 6'],
        value: 0,
        id: 1,
        nextLvlCost: [0, 10, 35, 50, 75, 100],
        isMaxUpgrade: false
    },
    towerOne: {
        name: ['Plan Budowy lewej wieży', 'Klocek 1', 'Klocek 2', 'Klocek 3', 'Klocek 4', 'Klocek 5', 'Lewa Wieża'],
        value: 0,
        id: 1,
        nextLvlCost: [0, 10, 35, 50, 75, 100, 130],
        isMaxUpgrade: false
    },
    towerTwo: {
        name: ['Plan Budowy prawej wieży', 'Klocek 1', 'Klocek 2', 'Klocek 3', 'Klocek 4', 'Klocek 5', 'Prawa Wieża'],
        value: 0,
        id: 1,
        nextLvlCost: [0, 10, 35, 50, 75, 100, 130],
        isMaxUpgrade: false
    },
    castle: {
        name:
            [
                'Plan Budowy zamku', 'Klocek 1',
                'Klocek 2', 'Klocek 3', 'Klocek 4', 'Klocek 5',
                'Zamek', "Zamek", "Zamek", "Zamek", "zamek","zamek","zamek"
            ],
        value: 0,
        id: 1,
        nextLvlCost: [0, 10, 50, 75, 100, 130, 150, 175, 200, 220, 250,275,300],
        isMaxUpgrade: false
    },
}