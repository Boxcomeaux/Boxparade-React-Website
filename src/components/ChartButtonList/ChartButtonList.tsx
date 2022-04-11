import React, {useEffect, useState} from "react";
import ChartButton from "../ChartButton/ChartButton";
import _c from './ChartButtonList.module.css';
import GlossarySVG from "../../SVGs/GlossarySVG";

const ChartButtonList: React.FC<{listOfCharts: string[], sendIndex: (index: number) => void, typeIndex: number, showDocModal: () => void, chartIndex: number, typeClick: boolean, mode: boolean}> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sendIndexHandler = (index: number) => {
        props.sendIndex(index);
        setActiveIndex(index);
    };
    const glossaryHandler = () => {
        props.showDocModal();
    };

    useEffect(() => {
        setActiveIndex(0);
    },[props.typeClick]);

    useEffect(() => {
            setActiveIndex(0);
    },[props.typeIndex]);

    return <div className={`gWidth ${_c.chartToggleContainer} ${!props.mode ? _c["chartToggleContainer-Dark"] : ''}`}>
        {
            props.listOfCharts.map((item, i) => (
                <ChartButton key={item} title={item} index={i} sendIndex={sendIndexHandler} typeIndex={props.typeIndex} activeIndex={activeIndex}/>
            ))
        }
        <button type="button" className={_c.docBtn} onClick={glossaryHandler}><GlossarySVG/></button>
    </div>
};

export default ChartButtonList;