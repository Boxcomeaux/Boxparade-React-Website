import React, {useRef} from "react";
import CodeSkeleton from "../CodeSkeleton/CodeSkeleton";
import _c from './CodeProcess.module.css';

const CodeProcess: React.FC<{ framework: number, pieJsonObj: {}, chartType: number }> = (props) => {
    const code = useRef<HTMLDivElement>(null);

    return (
        <div className={_c.code} ref={code}>
            <CodeSkeleton framework={props.framework} pieJsonObj={props.pieJsonObj} chartType={props.chartType}/>
        </div>
    )
};

export default React.memo(CodeProcess);