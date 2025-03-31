import styled from './upgrade-element.module.scss'
import {UpgradeElementType} from "../../helpers/upgrades.ts";
import {UpdateButton} from "../UpdateButton/UpdateButton.tsx";

type Props = {
    element: UpgradeElementType,
    upgradeName: string,
    points: number
    addUpgrade: (upgradeName: string, level: number) => void
}

export const UpgradeElement = ({element, upgradeName, points, addUpgrade}: Props) => {
    const index = element.value

    const handleClickUpgrade = () => {
        addUpgrade(upgradeName, index + 1);
    }

    return (
        <div className={`${styled.upgradeElementWrapper} ${element.isMaxUpgrade && styled.upgradeElementWrapperDone}`}>
            <div className={styled.left}>
                <span className={styled.title}>
                    {element.name[index]}
                </span>
                <div className={styled.levelWrapper}>
                    {element.nextLvlCost.map((el, i) => (
                        <div key={i}
                             className={`${styled.levelElement} ${i <= index && styled.levelElementActive}`}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styled.right}>
                {!element.isMaxUpgrade ? (
                    <UpdateButton
                        onClick={handleClickUpgrade}
                        text={'Ulepsz'}
                        isDisabled={points < element.nextLvlCost[index + 1]}
                    />
                ) : (
                    <div className={styled.doneBoxIcon}>
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                )}
            </div>
        </div>
    )
}