import {createContext, ReactElement, useReducer, useEffect, useRef} from "react";
import {UpgradeElementType, UpgradesDeFault} from "../helpers/upgrades.ts";

type PointContextType = {
    points: number;
    upgrades: { [key: string]: UpgradeElementType }
    addPoint: (point?: number) => void;
    autoMultiplier: number
    addUpgrade: (upgradeName: string, level: number) => void;
};


export const PointContext = createContext<PointContextType>({
    points: 0,
    upgrades: {},
    autoMultiplier: 0,
    addPoint: () => {
    },
    addUpgrade: () => {
    },
});
type Props = {
    children: ReactElement,
}

export type PointStoreType = {
    points: number,
    autoMultiplier: number,
    upgrades: { [key: string]: UpgradeElementType }
}

type AppActions =
    | { type: "clickedPoint"; payload: number }
    | { type: "addPoint"; payload: number }
    | { type: "clickedUpgrade"; payload: { upgradeName: string, level: number } };

const DEF_STORE: PointStoreType = {
    points: 0,
    autoMultiplier: 0,
    upgrades: UpgradesDeFault
}

const pointReducer = (state: PointStoreType, action: AppActions) => {
    switch (action.type) {
        case 'addPoint':
            return {...state, points: state.points + action.payload};
        case 'clickedPoint':
            return {...state, points: state.points + state.upgrades.additionMultiplier.value + 1};
        case "clickedUpgrade": {
            const {upgradeName, level} = action.payload;
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

            let newAutoMultiplier
            if (upgradeName === 'towerOne' ||  upgradeName === 'towerTwo' || upgradeName === 'castle') {
                newAutoMultiplier = state.autoMultiplier + level
            } else {
                newAutoMultiplier = state.autoMultiplier
            }
            return {
                ...state,
                autoMultiplier: newAutoMultiplier,
                points: newPoints,
                upgrades: updatedUpgrades
            };
        }
        default:
            return state;
    }
}

export const PointProvider = ({children}: Props) => {
    const [store, dispatch] = useReducer(pointReducer, DEF_STORE)
    const pointInterval = useRef<number | null>(null);
    useEffect(() => {
        pointInterval.current = null
        if(store.autoMultiplier){
            pointInterval.current = setInterval(() => {
                addPoint(store.autoMultiplier)
            }, 2000)
        }
        return () => {
            if (pointInterval.current) {
                clearInterval(pointInterval.current);
                pointInterval.current = null;
            }
        };
    }, [store.autoMultiplier])

    const addPoint = (point?: number) => {
        if (point) {
            dispatch({type: 'addPoint', payload: point})
        } else {
            dispatch({type: 'clickedPoint', payload: 1})
        }
    }

    const addUpgrade = (upgradeName: string, level: number) => {
        dispatch({type: 'clickedUpgrade', payload: {upgradeName, level}})
    }


    const value = {
        points: store.points,
        addPoint,
        addUpgrade,
        upgrades: store.upgrades,
        autoMultiplier: store.autoMultiplier
    }

    return (
        <PointContext.Provider value={value}>
            {children}
        </PointContext.Provider>
    )
}