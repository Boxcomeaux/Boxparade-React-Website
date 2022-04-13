import React, {useState} from "react";
import _c from './ToggleButtonsList.module.css';
import ToggleButton from "../ToggleButton/ToggleButton";


const ToggleButtonsList: React.FC<{ names: string[], type: string, sendIndex: (index: number) => void, mode: boolean }> = (props) => {
    const [btnIndex, setBtnIndex] = useState(0);

    const onActiveHandler = (index: number) => {
        setBtnIndex(index);
        props.sendIndex(index);
    }

    let dynamicClass = props.mode ? _c.frameworkButtonsLight : _c.frameworkButtonsDark;
    if (props.type === 'Chart Types') {
        dynamicClass = props.mode ? _c.chartButtonsLight : _c.chartButtonsDark;
    }

    return (
        <div className={`gWidth ${_c.toggleButtons} ${dynamicClass}`}>
            <h2 className={_c.title}>Frameworks</h2>
            {
                props.names.map((item, index) => (
                        <ToggleButton key={item} index={index} item={item} onActive={onActiveHandler} newIndex={btnIndex}
                                      type={props.type}/>
                    )
                )
            }
        </div>)
};

export default ToggleButtonsList;