import styled from './main-button.module.scss'
import {useContext, useState,useRef} from "react";
import { motion } from "framer-motion";
import {PointContext} from "../../context/PointContext.tsx";
import clickSound from '../../assets/click4.mp3'

type ClickEffect = {
    id: number;
    x: number;
    y: number;
};

export const MainButton = () => {
    const [effects, setEffects] = useState<ClickEffect[]>([]);
    const {addPoint,upgrades} = useContext(PointContext);
    const audioRef = useRef(new Audio(clickSound));

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
       if(upgrades.buttonClass.value  === 4){
           audioRef.current.currentTime = 0; // 🔹 Resetujemy czas, aby dźwięk zawsze zaczynał się od początku
           audioRef.current.play();
       }
        addPoint()
        const { clientX, clientY } = e;
        const id = Date.now();

        setEffects((prev) => [...prev, { id, x: clientX, y: clientY - 40 }]);

        setTimeout(() => {
            setEffects((prev) => prev.filter((effect) => effect.id !== id));
        }, 1000);
    };

    const mainButtonClass = () => {
        const buttonClassValue = upgrades.buttonClass.value;
        return `main-button-lvl-${buttonClassValue}`;
    }

    return (
        <div className={styled.mainButtonBox}>
            {effects.map(({ id, x, y }) => (
                <motion.span
                    key={id}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={styled.clickedEffect}
                    style={{ left: x, top: y }}
                >
                    +1
                </motion.span>
            ))}

            <button onClick={handleClick} className={`basic-button ${mainButtonClass()}`}>
                Punkt + 1
            </button>
        </div>
    )
}