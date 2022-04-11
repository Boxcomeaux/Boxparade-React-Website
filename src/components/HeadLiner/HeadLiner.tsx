import _c from "./HeadLiner.module.css";
import React from "react";
import DestructSVG from "../../SVGs/DestructSVG";
import BxpModel from "../BxpModel";

const HeadLiner: React.FC<{mode: boolean}> = (props) => {
    return (
        <section className={`${_c.sectionOne} ${!props.mode ? _c["sectionOne-Dark"]: ''}`}>
            <div className={`gWidth`}>
                <div>
                    <h1>Learn Boxology</h1>
                    <p>Welcome to Boxparade&copy;GraphX, where you will learn Boxology! Yes I know you're probably wondering, "What does Boxology mean?". Well it's not a real word, but it's fun and it means the study of Boxparade technology. Ooooo cool, eh? GraphX is a graph visualization tool for displaying a more intuitive way of analyzing data.</p>
                </div>
                <BxpModel/>
            </div>
            <div/>
            {props.mode && <DestructSVG color={"#fff"}/>}
            {!props.mode && <DestructSVG color={"#202020"}/>}
        </section>
    )
}

export default HeadLiner;