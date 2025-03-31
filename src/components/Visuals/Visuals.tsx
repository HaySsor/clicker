import styled from './visuals.module.scss'
import {useContext} from "react";
import {PointContext} from "../../context/PointContext.tsx";
import {BuildingOne} from "../BuildingOne/BuildingOne.tsx";

type Props ={

}

export const Visuals = ({}: Props) => {

    const {points,upgrades} = useContext(PointContext)

    return(
        <div className={styled.visualsContainer}>
            <BuildingOne data={upgrades.buildOne}  />

            <div className={styled.pointBox}>
                <span> Twoje Punkty : <span className={styled.points}> {points} </span> </span>
            </div>
        </div>
    )
}