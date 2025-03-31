import {createContext, ReactElement, useReducer} from "react";
import {UpgradeElementType, UpgradesDeFault} from "../helpers/upgrades.ts";

type PointContextType = {
    points: number;
    upgrades : {[key : string] : UpgradeElementType}
    addPoint: (point?: number) => void;
    addUpgrade : (upgradeName : string, level :number ) => void;
};


export const PointContext = createContext<PointContextType>({
    points : 0,
    upgrades: {},
    addPoint: () => {},
    addUpgrade : () => {},
});
type Props = {
    children: ReactElement,
}

export type PointStoreType = {
    points: number,
    upgrades : {[key: string]: UpgradeElementType}
}

type AppActions =
    | { type: "clickedPoint"; payload: number }
    | { type: "addPoint"; payload: number }
    | { type: "clickedUpgrade"; payload: { upgradeName: string ,level : number} };

const DEF_STORE :PointStoreType ={
    points : 0,
    upgrades : UpgradesDeFault
}

const pointReducer = (state : PointStoreType, action :AppActions ) =>{
    switch (action.type) {
        case 'clickedPoint':
                return {...state, points : state.points + state.upgrades.additionMultiplier.value + 1};
        case "clickedUpgrade": {
            const { upgradeName, level } = action.payload;
            const upgrade = state.upgrades[upgradeName];
            const updatedUpgrades = {
                ...state.upgrades,
                [upgradeName]: {
                    ...upgrade,
                    value: level,
                    isMaxUpgrade: state.upgrades[upgradeName].nextLvlCost.length - 2 === state.upgrades[upgradeName].value
                }
            };

            const newPoints = state.points - upgrade.nextLvlCost[level];

            return {
                ...state,
                points: newPoints,
                upgrades: updatedUpgrades
            };
        }
        default:
            return state;
    }
}

export const PointProvider = ({children}: Props) => {
    const [store , dispatch] = useReducer(pointReducer, DEF_STORE )

    const addPoint = (point?: number ) => {
        if(point){
            dispatch({type : 'addPoint', payload : point})
        }else{
            dispatch({type : 'clickedPoint', payload : 1})
        }
    }

    const addUpgrade = (upgradeName : string, level :number ) => {
        dispatch({type :'clickedUpgrade', payload :{upgradeName, level} })
    }


    const value = {points: store.points, addPoint, addUpgrade, upgrades: store.upgrades}

    return(
        <PointContext.Provider value={value}>
            {children}
        </PointContext.Provider>
    )
}