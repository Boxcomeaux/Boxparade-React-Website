import React from "react";
import _c from './Modal.module.css';

const Modal: React.FC<{onToggle: () => void, mode: string}> = (props) => {
    const toggleModal = () => {
        props.onToggle();
    };

    return <div className={`${_c.Modal} ${props.mode === "DARK" ? _c.dark : ''}`} onClick={toggleModal}/>
};
export default Modal;