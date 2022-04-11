import React, { useState} from "react";
import _c from './Letter.module.css';

const Letter : React.FC<{letter: string, index: number}> = (props) => {
    const [addAnim, setAddAnim] = useState(false);
    const vw = 6;
    const x = Number(Math.random() * vw) - vw;
    const y = Number(Math.random() * vw) - vw;
    setTimeout(() => {
        setAddAnim(true);
    },(props.index * 100));

    return (
            <span className={`${_c.txt} ${addAnim ? _c.txtAnim : ''}`} style={{transform: `translate(${x}vw,${y}vw)`}}>{props.letter}</span>
    )
}
export default Letter;