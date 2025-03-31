import styled from './visuals.module.scss'
import {useContext} from "react";
import {PointContext} from "../../context/PointContext.tsx";

type Props ={

}

export const Visuals = ({}: Props) => {

    const {points} = useContext(PointContext)

    return(
        <div className={styled.visualsContainer}>


            <div className={styled.pointBox}>
                <span> Twoje Punkty : <span className={styled.points}> {points} </span> </span>
            </div>
        </div>
    )
}