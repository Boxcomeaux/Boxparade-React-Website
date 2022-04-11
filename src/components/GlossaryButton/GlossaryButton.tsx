import React, {useEffect, useState} from "react";
import _c from './GlossaryButton.module.css';
import StarSVG from "../../SVGs/StarSVG";

const GlossaryButton: React.FC<{index: number, onGlossaryButtonClick: (index: number) => void, selectedItem: number}> = (props) => {
    const [active, setActive] = useState(false);
    const changeGlossaryHandler = () => {
        props.onGlossaryButtonClick(props.index);
        setActive(true);
    }
    useEffect(() => {
        if(props.index !== props.selectedItem){
            setActive(false);
        }
    },[props.selectedItem]);

    useEffect(() => {
        if(props.index === 0){
            setActive(true);
        }
    },[]);

    return <button onClick={changeGlossaryHandler} className={active ? _c.active : ''} type="button"><StarSVG/>{props.children}</button>
};

export default GlossaryButton;