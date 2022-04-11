import React, {Fragment, useState } from "react";
import _c from './ToggleButtonsList.module.css';
import ToggleButton from "../ToggleButton/ToggleButton";


const ToggleButtonsList: React.FC<{names:string[], type: string ,sendIndex: (index: number) => void, mode: boolean}> = (props) => {
    const [btnIndex, setBtnIndex] = useState(0);

    const onActiveHandler = (index: number) => {
        setBtnIndex(index);
        props.sendIndex(index);
    }

    return <Fragment>
        { props.type === 'Frameworks' &&
            <div className={`gWidth ${_c.toggleButtons} ${props.mode ? _c.frameworkButtonsLight : _c.frameworkButtonsDark}`}>
                <h2 className={_c.title}>Frameworks</h2>
                {
                    props.names.map((item,index) => (
                            <ToggleButton key={item} index={index} item={item} onActive={onActiveHandler} newIndex={btnIndex} type={props.type}/>
                        )
                    )
                }
            </div>
        }
        { props.type === 'Chart Types' &&
        <div className={`gWidth ${_c.toggleButtons} ${props.mode ? _c.chartButtonsLight : _c.chartButtonsDark}`}>
            <h2 className={_c.title}>Charts</h2>
            {
                props.names.map((item,index) => (
                        <ToggleButton key={item} index={index} item={item} onActive={onActiveHandler} newIndex={btnIndex} type={props.type}/>
                    )
                )
            }
        </div>
        }
    </Fragment>
};

export default ToggleButtonsList;