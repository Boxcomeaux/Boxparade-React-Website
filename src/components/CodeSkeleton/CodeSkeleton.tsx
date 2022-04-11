import React, {Fragment, useEffect, useState} from "react";
import _c from './CodeSkeleton.module.css';
import useChartJson from "../../Hooks/useChartJson";
import JavascriptTopShell from "../CodeShells/JavascriptTopShell";
import JavascriptBottomShell from "../CodeShells/JavascriptBottomShell";
import ReactTopShell from "../CodeShells/ReactTopShell";
import AngularTopShell from "../CodeShells/AngularTopShell";
import ReactBottomShell from "../CodeShells/ReactBottomShell";
import AngularBottomShell from "../CodeShells/AngularBottomShell";

const CodeSkeleton: React.FC<{ framework: number, pieJsonObj: {}, chartType: number }> = (props) => {
    const [entriesList, setEntriesList] = useState<[key: string, value: any][]>([]);
    const {newJsonObj} = useChartJson({...props.pieJsonObj}, props.chartType);

    useEffect(() => {
        const entries = Object.entries(newJsonObj);
        setEntriesList(entries);
    }, [props.pieJsonObj]);

    return (
        <Fragment>
            { props.framework === 0 && <JavascriptTopShell/>}
            { props.framework === 1 && <ReactTopShell/>}
            { props.framework === 2 && <AngularTopShell/>}
                    {
                        entriesList.map((item, index: number) => (
                            <Fragment key={index.toString().replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}>
                                <span className={_c.indent2} ><span className={_c.highlight}>{item[0]}</span>:&nbsp;
                                    {typeof item[1] === 'number' &&
                                    <span className={_c.num}>{item[1].toString()}</span>}
                                    {typeof item[1] === 'string' &&
                                    <span className={_c.text}>'{item[1].toString()}'</span>}
                                    {typeof item[1] === 'boolean' &&
                                    <span className={_c.gold}>{item[1].toString()}</span>}
                                    {typeof item[1] === 'object' && <Fragment>
                                        [<span className={`${_c.indent2}`}>{Object.entries(item[1]).map((item2:[string, any], index2: number) => (
                                            <Fragment key={index2.toString().replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}>
                                                {typeof item2[1] === 'number' &&
                                                <span key={index2} className={_c.num}>'{item2[1].toString()}'</span>}
                                                {typeof item2[1] === 'string' &&
                                                <span className={_c.text} key={index2}>'{item2[1].toString()}'</span>}{(index2 < Object.entries(item[1]).length - 1 && item[0] !== "data") && <span className={_c.plain}>, </span>}
                                                {typeof item2[1] === 'boolean' &&
                                                <span className={_c.gold}  key={index2}>{item[1].toString()}</span>}
                                                {typeof item2[1] === 'object' && <Fragment>
                                                    {props.chartType === 0 && "["}{props.chartType > 0 && <span className={_c.indent2Block}>{"["}</span>}{item2[1].map((item3: [][], index3: number) => (
                                                   <Fragment key={index3.toString().replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}>
                                                       <span className={_c.indent2Block}>{"{"}</span>
                                                       {
                                                           Object.entries(item3).map((item4:[string, any], index4: number) => (
                                                               <Fragment key={index4.toString().replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}>
                                                                   {typeof item4[1] === 'number' &&
                                                                   <span  key={index4} className={`${_c.num} ${_c.indent3}`}>{item4[0].toString()}: {item4[1].toString()}</span>}
                                                                   {typeof item4[1] === 'string' &&
                                                                   <span key={index4}  className={`${_c.text} ${_c.indent3}`}>{item4[0].toString()}: '{item4[1].toString()}'{index2 < Object.entries(item4[1]).length - 1 && <span className={_c.plain}>, </span>}</span>}
                                                                   {typeof item4[1] === 'boolean' &&
                                                                   <span key={index4}  className={`${_c.gold} ${_c.indent3}`}>{item4[0].toString()}: {item4[1].toString()}</span>}
                                                               </Fragment>
                                                           ))
                                                       }
                                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={_c.indent2Block}>{index3 < item2[1].length - 1 && "},"}
                                                           {index3 === item2[1].length - 1 && "}"}</span>
                                                   </Fragment>
                                                ))}<span className={_c.indent2Block}>{(props.chartType === 0 || (props.chartType >= 1 && index2 === item[1].length - 1)) && "]]"}{(props.chartType >= 1 && index2 < item[1].length - 1) && "],"}</span>
                                                </Fragment>
                                                }
                                            </Fragment>
                                        ))}{item[0] !== "data" && "]"}</span>
                                    </Fragment>
                                    }
                                    {(index < entriesList.length - 1) && ","}
                                    {(index === entriesList.length - 1) && <Fragment><span className={`${_c.indent1} ${_c.newLine}`}>{"};"}</span></Fragment>}
                            </span>
                            </Fragment>
                        ))
                    }
            {props.framework === 0 && <JavascriptBottomShell/>}
            {props.framework === 1 && <ReactBottomShell/>}
            {props.framework === 2 && <AngularBottomShell/>}
        </Fragment>
    )
};

export default CodeSkeleton;