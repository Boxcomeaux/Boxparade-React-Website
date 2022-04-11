import React, {useEffect, useState} from "react";
import _c from './ToggleButton.module.css';
import AngularSVG from "../../SVGs/AngularSVG";
import JavascriptSVG from "../../SVGs/JavascriptSVG";
import ReactJSSVG from "../../SVGs/ReactJSSVG";
import PieChartSVG from "../../SVGs/PieChartSVG";
import BarChartSVG from "../../SVGs/BarChartSVG";
import LineChartSVG from "../../SVGs/LineChartSVG";
import AreaChartSVG from "../../SVGs/AreaChartSVG";

const ToggleButton: React.FC<{ item: string, index: number, onActive: (index: number) => void, newIndex: number, type: string }> = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [init, setInit] = useState(true);
    useEffect(() => {

        if (props.newIndex !== props.index) {
            setIsActive(false);
        }

        if (init && props.index === 0) {
            setIsActive(true);
            setInit(false);
        }
    }, [props.newIndex]);

    const fwButtonHandler = () => {
        setIsActive(true);
        props.onActive(props.index);
    };

    return (
        <button onClick={fwButtonHandler} className={`${_c.fwButton} ${isActive ? _c.active : ''}`}>
            {(props.type === 'Frameworks' && props.index === 0) && <JavascriptSVG/>}
            {(props.type === 'Frameworks' && props.index === 1) && <ReactJSSVG/>}
            {(props.type === 'Frameworks' && props.index === 2) && <AngularSVG/>}
            {(props.type === 'Chart Types' && props.index === 0) && <PieChartSVG/>}
            {(props.type === 'Chart Types' && props.index === 1) && <BarChartSVG/>}
            {(props.type === 'Chart Types' && props.index === 2) && <LineChartSVG/>}
            {(props.type === 'Chart Types' && props.index === 3) && <AreaChartSVG/>}
            <span>{props.item}</span>
        </button>
    )
}
export default ToggleButton;