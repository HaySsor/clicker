import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styled from './tower.module.scss';
import { UpgradeElementType } from "../../helpers/upgrades.ts";
import buildSound from '../../assets/bulid.mp3'

type Props = {
    data: UpgradeElementType;
};

export const Tower = ({ data }: Props) => {
    const previousValue = useRef(data.value);

    useEffect(() => {
        if (data.value > previousValue.current) {
            const sound = new Audio(buildSound);
            sound.play();
        }
        previousValue.current = data.value;
    }, [data.value]);

    return (
        <div className={styled.buildingWrapper}>
            <div className={styled.buildingBox}>
                {data.nextLvlCost.map((_, index) => {
                    return index + 1 <= data.value && (

                        <motion.div
                            key={index}
                            className={`${styled.buildingFlor} ${(data.nextLvlCost.length - 2) === index ? styled.buildingRoof : ''}`}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};