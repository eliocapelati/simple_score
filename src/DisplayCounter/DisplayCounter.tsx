import { useState } from "react"

import styles from './DisplayCounter.module.css';

type teamColor = 'Pink' | 'Blue'

export interface DisplayCounterProps {
    teamColor: teamColor;
}

export const DisplayCounter = ({ teamColor } : DisplayCounterProps) => {
    const [count, setCount] = useState(0);
    const classes = [styles.container, styles[`team${teamColor}`]].join(" ")

    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        if(count !=0 ){
            setCount(count-1);
        }
    }

    return (
        <div className={classes}>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}