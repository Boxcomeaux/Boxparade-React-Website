import _c from "./GraphXDisplay.module.css";
import React from "react";
import CodeProcessor from "../CodeProcessor/CodeProcessor";
import GraphX from "boxparade-graphx-react";
import SmallBxp from "../../Images/boxparade_logo39x39.png";
import Footer from "../Footer/Footer";
import Destruct2SVG from "../../SVGs/Destruct2SVG";

const GraphXDisplay: React.FC<{chart: number, title: string, chartWidth: string, pieJsonObj: {}, chartType: number, framework: number, mode: boolean}> = (props) => {
    return (
        <section className={`${_c.section} ${!props.mode ? _c.sectionDark : ''}`}>
            <h2>{props.title}</h2>
            <div className={`gWidth ${_c.GraphXDisplayContainer} ${!props.mode ? _c["GraphXDisplayContainer-Dark"] : ''}`}>
                <div>
                    <div>
                        <CodeProcessor framework={props.framework} pieJsonObj={props.pieJsonObj} chartType={props.chartType}/>
                    </div>
                </div>
                <div>
                    <GraphX data={props.pieJsonObj}/>
                </div>
            </div>
            <div className={`${_c.implementation} ${!props.mode ? _c["implementation-Dark"] : ''}`}>
                {props.mode && <Destruct2SVG color={"#fff"}/>}
                {!props.mode && <Destruct2SVG color={"#202020"}/>}
                <div className={`gWidth`}>
                    <h2>Implementation</h2>
                    <div><span/><img className="delayedBounce" src={SmallBxp} alt="SMALL_BXP_LOGO"/><span/></div>
                    {props.framework === 0 && <ul>
                        <li>First begin by downloading the project from node package manager(npm) <span className={_c.codeBlock}>npm i boxparade-graphx-javascript</span> into your project folder. You must have <a href="https://nodejs.org/en/" rel="noreferrer"  target="_blank">node</a> installed to use this package.</li>
                        <li>Secondly, extract the javascript file from the downloaded node package file into the assets directory of your project.</li>
                        <li>Reference the GraphX script into the body of your html page like this <span className={_c.codeBlock}>{'<script src="[YOUR_ASSET_FOLDER]/boxparade-graphx-javascript.js"></script>'}</span>.</li>
                        <li>Add a <span className={_c.gold}>&#60;div&#62;</span> tag to your html and apply an "id" attribute with a value to allow GraphX to find the object in the DOM. The name you provide for the id must match the id field in the JSON passed to <span className={_c.codeBlock}>boxparadeGraphX(NAME_OF_JSON_VARIABLE)</span></li>
                        <li>Lastly, Run your program and Vóila! (An example is shown above)</li>
                    </ul>}
                    {props.framework === 1 && <ul>
                        <li>First begin by downloading the project from node package manager(npm) <span className={_c.codeBlock}>npm i boxparade-graphx-react</span> into your project folder. You must have <a href="https://nodejs.org/en/" rel="noreferrer"  target="_blank">node</a> installed to use this package.</li>
                        <li>Secondly, you should now be able to reference an import for the package in your jsx file like this <span className={_c.codeBlock}>{"import GraphX from \"boxparade-graphx-react\""}</span>.</li>
                        <li>Next, create a json object (as shown in the example above) that will be passed as a property to the GraphX component like this <span className={_c.codeBlock}>{`<GraphX data={NAME_OF_JSON_VARIABLE}/>`}</span></li>
                        <li>Lastly, Run your program and Vóila! (An example is shown above)</li>
                    </ul>}
                    {props.framework === 2 && <ul>
                        <li>First begin by downloading the project from node package manager(npm) <span className={_c.codeBlock}>npm i boxparade-graphx-angular</span> into your project folder. You must have <a href="https://nodejs.org/en/" rel="noreferrer"  target="_blank">node</a> installed to use this package.</li>
                        <li>Secondly, add the GraphXModule module to your <span>app.module.ts</span> file in your Angular project</li>
                        <li>Next, you should now be able to reference an import for the package in your Typescript file like this <span className={_c.codeBlock}>{"import GraphX from \"boxparade-graphx-angular\""}</span>.</li>
                        <li>Now create a json object (as shown in the example above) that will be passed as a property to the GraphX component like this <span className={_c.codeBlock}>{`<GraphX data={NAME_OF_JSON_VARIABLE}/>`}</span></li>
                        <li>Lastly, Run your program and Vóila! (An example is shown above)</li>
                    </ul>}
                    <Footer/>
                </div>
                <div/>
            </div>
        </section>
    )
};

export default React.memo(GraphXDisplay);