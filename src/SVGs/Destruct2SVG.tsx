import React from "react";

const Destruct2SVG: React.FC<{color: string}> = (props) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="300">
        <path fill={props.color} stroke="none" d="M0, 0 L330, 140 L610, 80 L1200, 140 L1700, 90 L1920, 0 Z"/>
    </svg>
};

export default Destruct2SVG;