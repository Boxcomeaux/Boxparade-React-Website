import React from "react";

const DestructSVG: React.FC<{color: string}> = (props) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="400">
        <path fill={props.color} stroke="none" d="M0, 400 L200, 220 L730, 320 L775, 140 L1450, 330 L1780, 250 L1920, 400 L0, 400 Z"/>
    </svg>
};

export default DestructSVG;