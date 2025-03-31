import styled from './visuals.module.scss'
import {useContext} from "react";
import {PointContext} from "../../context/PointContext.tsx";
import {Tower} from "../Tower/Tower.tsx";
import {Castle} from "../Castle/Castle.tsx";

type Props = {}

export const Visuals = ({}: Props) => {

    const {points, upgrades, autoMultiplier} = useContext(PointContext)

    return (
        <div className={styled.visualsContainer}>
            <div className={styled.visualsContainerTop}>
                <Tower data={upgrades.towerOne}/>
                <Castle data={upgrades.castle}/>
                <Tower data={upgrades.towerTwo}/>
            </div>
            <div className={styled.visualsContainerBottom}>
                <div className={styled.multiInfo}>
                    <span>
                        <i className="fa-solid fa-bolt"></i>
                        punkty: {autoMultiplier}  </span>
                </div>
                <div className={styled.pointBox}>
                    <span> Twoje Punkty : <span className={styled.points}> {points} </span> </span>
                </div>
            </div>
        </div>
    )
}