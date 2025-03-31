import styled from './building-one.module.scss'
import {UpgradeElementType} from "../../helpers/upgrades.ts";

type Props= {
    data : UpgradeElementType
}

export const BuildingOne = ({data}: Props) =>{


    return (
        <div className={styled.buildingWrapper}> TU </div>
    )
}