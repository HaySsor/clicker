import styled from './upgrades-list.module.scss'
import {useContext} from "react";
import {PointContext} from "../../context/PointContext.tsx";
import {UpgradeElement} from "../UpgradeElement/UpgradeElement.tsx";

export const UpgradesList = () => {
    const {upgrades,points,addUpgrade} = useContext(PointContext);

    return (
        <div className={styled.upgradesListWrapper}>
            {Object.entries(upgrades).map(([key, value]) =>
                (<UpgradeElement key={key} points={points} addUpgrade={addUpgrade} element={value} upgradeName={key}/>))
            }
        </div>
    )
}