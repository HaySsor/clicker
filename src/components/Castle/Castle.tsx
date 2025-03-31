import styled from './castle.module.scss'
import {UpgradeElementType} from "../../helpers/upgrades.ts";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
import buildSound from "../../assets/bulid.mp3";

type Props = {
    data: UpgradeElementType;
};


export const Castle = ({data}: Props) => {

    const previousValue = useRef(data.value);

    useEffect(() => {
        if (data.value > previousValue.current) {
            const sound = new Audio(buildSound);
            sound.play();
        }
        previousValue.current = data.value;
    }, [data.value]);

    return (
        <div className={styled.castleWrapper}>
            <div className={styled.castleBox}>
                {data.nextLvlCost.map((_, index) => {
                    return index + 1 <= data.value && (
                        <motion.div
                            key={index}
                            className={`${styled.castleBrick}`}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}