import _c from "../CodeSkeleton/CodeSkeleton.module.css";
import React, {Fragment} from "react";

const AngularTopShell = () => {
    return <Fragment>
        <span><span className={_c.orange}>import</span> {"{Component, OnInit}"} <span className={_c.orange}>from </span><span className={_c.text}>{"\"@angular/core\""}</span><span className={_c.orange}>;</span></span>
        <span><span className={_c.orange}>import</span> GraphX <span className={_c.orange}>from </span><span className={_c.text}>{"\"boxparade-graphx-angular\""}</span><span className={_c.orange}>;</span></span><br/>
        <span><span className={_c.gold}>@Component</span>{"({"}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={`${_c.highlight}`}>template</span>:<span className={_c.text}>`{"<GraphX [json]='piejson'></GraphX>"}`</span></span><span>{"})"}</span><br/>
        <span><span className={_c.orange}>export class </span>{"GraphXTemplate"} <span className={_c.orange}>implements</span> {"OnInit {"}</span>
        <span className={_c.indent1}>pieJson: <span className={_c.orange}>object;</span></span>
        <span className={_c.indent1}><span className={_c.highlight}>constructor</span>{"() {}"}</span>
        <span className={_c.indent1}><span className={_c.highlight}>ngOnInit</span>{"() {"}</span>
        <span className={_c.indent2}><span className={_c.orange}>this.</span>{"pieJson = {"}</span>
    </Fragment>
};

export default AngularTopShell;