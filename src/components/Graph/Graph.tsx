import React, {useEffect} from "react";
// @ts-ignore

const Graph : React.FC<{values: {}, width: string }> = (props) => {
    useEffect(() => {
    },[props.values]);
    return <div id="demo" style={{width: props.width}}/>
};

export default Graph;