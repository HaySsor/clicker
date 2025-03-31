import styled from './update-button.module.scss'
import {useRef} from "react";
import levelUpSound from '../../assets/level-up.mp3'

type Props = {
    text: string;
    customClass?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}


export const UpdateButton = ({text,isDisabled,onClick}: Props) => {
    const audioRef = useRef(new Audio(levelUpSound));

    const handleClick = () => {
        audioRef.current.currentTime = 0; // 🔹 Resetujemy czas, aby dźwięk zawsze zaczynał się od początku
        audioRef.current.play();

        onClick && onClick()
    }

    return (
        <button onClick={!isDisabled ?  handleClick : ()=>{}} className={`${styled.updateButtonClass} ${isDisabled ? styled.updateButtonClassDisabled : ''}`}>
            {text}
        </button>
    )
}