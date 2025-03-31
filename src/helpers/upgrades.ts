export type UpgradeElementType = {
    name: string[];
    value : number,
    id: number,
    nextLvlCost : number[],
    isMaxUpgrade: boolean,
}


export const UpgradesDeFault : {[key : string] : UpgradeElementType} = {
    buttonClass : {
        name : ['Podstawowy Przycisk', 'Ładniejszy Przycisk', 'Fajny Przycisk', 'WOW Przycisk', 'Sigma Przycisk'],
        value : 0,
        id: 1,
        nextLvlCost : [0, 10,20,30,40],
        isMaxUpgrade : false
    }
}