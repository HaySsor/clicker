export type UpgradeElementType = {
    name: string[];
    value : number,
    id: number,
    nextLvlCost : number[],
    isMaxUpgrade: boolean,
}


export const UpgradesDeFault : {[key : string] : UpgradeElementType} = {
    buttonClass : {
        name : ['Podstawowy Przycisk', 'Ładniejszy Przycisk', 'WOW Przycisk', 'Sigma Przycisk'],
        value : 0,
        id: 1,
        nextLvlCost : [0, 10,20,30,40],
        isMaxUpgrade : false
    },
    additionMultiplier :{
        name : ['+1 Byku', '+2 Byczku', 'ohoho + 3', 'Najjs + 4', 'Click x 5 '],
        value : 0,
        id: 1,
        nextLvlCost : [0, 10,20,30,40],
        isMaxUpgrade : false
    },
    buildOne :{
        name : ['Plan budowy', 'Piętro 1', 'Piętro 2', 'Piętro 3', 'Piętro 4'],
        value : 0,
        id: 1,
        nextLvlCost : [0, 10,20,30,40],
        isMaxUpgrade : false
    }
}