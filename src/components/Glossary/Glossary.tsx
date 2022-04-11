import _c from "./Glossary.module.css";
import React, {Fragment, useEffect, useState} from "react";
import GlossaryButton from "../GlossaryButton/GlossaryButton";

const glossary = ['Background','Bottom Title','Chart Size','Colors','Data','Description','Description Border','Description Border Radius','Description Color','Description Text Color','Divisions','Fill Opacity','Font Family','Graph Styling','Id','Intro Animation','Label Color Is Item Color','Label Styling','Label Text Color','Left Title','Legend Position','Line Styling','Names','Offset','Point Radius','Ring Size','Show Bottom Title','Show Description','Show Left Title','Show Legend','Show Percentage','Show Title','Spinnable','Stroke Color','Stroke Opacity','Stroke Width','Subtext Color','Subtitle','Text Size','Tilt','Title','Title Color','Titles','Type','Value Type','Vertical Bar Color','Vertical Bar Opacity'];
let glossTimer: NodeJS.Timeout;
const Glossary: React.FC<{mode:boolean}> = (props) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const changeGlossaryHandler = (index: number) => {
        setSelectedItem(index);
        if(window.innerWidth < 550){
            clearTimeout(glossTimer);
            glossTimer = setTimeout(() => {
                collapseDock();
            },500);
        }
    };
    const collapseDock = () => {
          setIsCollapsed(prevState => !prevState);
    };

    useEffect(() => {
        if(window.innerWidth < 550){
            collapseDock();
        }
    }, []);

    return (
        <div className={`${_c.glossary} ${!props.mode ? _c["glossary-Dark"] : ''}`}>
            <h1>Property Glossary</h1>
            <div>
                <div className={isCollapsed ? _c.collapse : ''}>
                    {
                        glossary.map((item, index: number) => (
                            <GlossaryButton key={item} index={index} onGlossaryButtonClick={changeGlossaryHandler} selectedItem={selectedItem}><span>{item}</span></GlossaryButton>
                        ))
                    }
                </div>
                <div>
                    <button onClick={collapseDock}><svg className={isCollapsed ? _c.switch : ''} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path  fill="#fff" d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"/></svg></button>
                    <div onClick={collapseDock}/>
                    {selectedItem === 0 && <Fragment><h2>Background</h2><p>The Background property establishes the background of the container for the graph. The background property behaves similarly to the background property in CSS.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Example</h3><p className={_c.code}>background: <span className={_c.text}>'#fff'</span></p></Fragment>}
                    {selectedItem === 1 && <Fragment><h2>Bottom Title</h2><p>The Bottom Title property sets the title located on the bottom pane of charts such as the line and area charts.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>2D & 3D Bar | 2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area</p><h3>Example</h3><p className={_c.code}>bottomtitle: <span className={_c.text}>'Test Bottom Title'</span></p></Fragment>}
                    {selectedItem === 2 && <Fragment><h2>Chart Size</h2><p>The Chart Size property is a number value between 1 and 3 that sets the multiplicity of the chart size for a graph relative to the size of the graph's container.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>{"1 -> 3 (min to max)"}</p><h3>Example</h3><p className={_c.code}>chartSize: <span className={_c.text}>'2'</span></p></Fragment>}
                    {selectedItem === 3 && <Fragment><h2>Colors</h2><p>The Colors property is an array of strings used to designate a color for a specific data object. This property's purpose is to minimize the hassle of designating colors for potentially large data sets. The color strings can either be a hex or rgb value.</p><h3>Data Type</h3><p>string[]</p><h3>Compatibility</h3><p>Required for all graphs except for pie charts.</p><h3>Example</h3><p className={_c.code}>colors: <span>[<span className={_c.text}>'1990'</span>, <span className={_c.text}>'1995'</span>, <span className={_c.text}>'2000'</span>, <span className={_c.text}>'2005'</span>, <span className={_c.text}>'2010'</span>]</span></p></Fragment>}
                    {selectedItem === 4 && <Fragment><h2>Data</h2><p>The Data property is necessary to allow you to add custom values to your graph that will be visually projected according to the type of graph you choose.</p><h3>Data Type</h3><p>JSON (object | object[])</p><h3>Compatibility</h3><p>Required for all graphs.</p><h3>Example</h3><p className={_c.code}>data: <span>[[<br/>{"{"}&nbsp;name: <span className={_c.text}>'1990'</span>{","}<br/>&nbsp;&nbsp;color: <span className={_c.text}>'1990'</span>{","}<br/>&nbsp;&nbsp;value: <span className={_c.num}>20</span>&nbsp;{"}"}<br/>]]</span></p></Fragment>}
                    {selectedItem === 5 && <Fragment><h2>Description</h2><p>The Description property sets the text that will be displayed when a data object is clicked or moused over with in a chart. The description property has special properties such as $value (to show the value of the data object), $title (to show the title of the corresponding data object), and $name (to show the name of the corresponding data object).</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>description: <span className={_c.text}>'This is a test description: $value and $title from $name'</span></p></Fragment>}
                    {selectedItem === 6 && <Fragment><h2>Description Border</h2><p>The Description Border property sets the border of the description box and behaves similarly to the CSS border property.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>descriptionborder: <span className={_c.text}>'solid #000 1px'</span></p></Fragment>}
                    {selectedItem === 7 && <Fragment><h2>Description Border Radius</h2><p>The Description Border Radius property sets the border radius of the description box and behaves similarly to the CSS border-radius property.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>{"0 -> 100 (min to max)"}</p><h3>Example</h3><p className={_c.code}>descriptionborderradius: <span className={_c.text}>'5'</span></p></Fragment>}
                    {selectedItem === 8 && <Fragment><h2>Description Color</h2><p>The Description Color property sets the background color of the description box. Any color string you use may either be a hex or rgba value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>descriptioncolor: <span className={_c.text}>'rgba(255,255,255,1)'</span></p></Fragment>}
                    {selectedItem === 9 && <Fragment><h2>Description Text Color</h2><p>The Description Text Color property sets the color of the text within the description box. Any color string you use may either be a hex or rgba value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>descriptiontextcolor: <span className={_c.text}>'rgba(80,80,80,1)'</span></p></Fragment>}
                    {selectedItem === 10 && <Fragment><h2>Divisions</h2><p>The Divisions property establishes the number of horizontal lines you would like to display within a graph such as the line and bar graph to show the minimum and maximum values of data objects.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>2D & 3D Bar | 2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area</p><h3>Values</h3><p>{"0 -> 30 (min to max)"}</p><h3>Example</h3><p className={_c.code}>divisions: <span className={_c.num}>5</span></p></Fragment>}
                    {selectedItem === 11 && <Fragment><h2>Fill Opacity</h2><p>The Fill Opacity property sets the opacity of the fill color of a data object or objects that are filled with color.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>{"0 -> 10 (min to max)"}</p><h3>Example</h3><p className={_c.code}>fillopacity: <span className={_c.text}>'5'</span></p></Fragment>}
                    {selectedItem === 12 && <Fragment><h2>Font Family</h2><p>The Font Family property sets font type used within a chart and behaves similarly to the font-family property used in CSS.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>Use a custom font family from your application</p><h3>Example</h3><p className={_c.code}>fontfamily: <span className={_c.text}>''Poppins', sans-serif'</span></p></Fragment>}
                    {selectedItem === 13 && <Fragment><h2>Graph Styling</h2><p>The Graph Styling property sets the theme of the chart container repositioning items based on the graph's styling set.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>NONE | BULLET</p><h3>Example</h3><p className={_c.code}>graphstyling: <span className={_c.text}>'none'</span></p></Fragment>}
                    {selectedItem === 14 && <Fragment><h2>Id</h2><p>The Id property is considered the the name of your designated chart and it <strong>cannot be duplicated</strong> on an existing page. It is best practice to have different names for each graph you create.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Required for all graphs.</p><h3>Example</h3><p className={_c.code}>id: <span className={_c.text}>'demo'</span></p></Fragment>}
                    {selectedItem === 15 && <Fragment><h2>Intro Animation</h2><p>The Intro Animation property adds an animation to the initialization of a graph to add more "pizzazz".</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>NONE | DRAW</p><h3>Example</h3><p className={_c.code}>introanimation: <span className={_c.text}>'draw'</span></p></Fragment>}
                    {selectedItem === 16 && <Fragment><h2>Label Color Is Item Color</h2><p>The Label Color Is Item Color property can either be set to true or false and it automatically sets the color of the labels to its corresponding data object color either within a json object or an array.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>labelcolorisitemcolor: <span className={_c.orange}>false</span></p></Fragment>}
                    {selectedItem === 17 && <Fragment><h2>Label Styling</h2><p>The Label Styling property repositions the labels within graphs to allow for a different way to view the data objects within graphs.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>NONE | SPIDER</p><h3>Example</h3><p className={_c.code}>labelstyling: <span className={_c.text}>'spider'</span></p></Fragment>}
                    {selectedItem === 18 && <Fragment><h2>Label Text Color</h2><p>The Label Text Color sets the color of the labels within the graph's frame. Any color string you use may either be a hex or rgb value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>labeltextcolor: <span className={_c.text}>'#fff'</span></p></Fragment>}
                    {selectedItem === 19 && <Fragment><h2>Left Title</h2><p>The Left Title property sets the title located on the left pane of charts such as the line and area charts.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>2D & 3D Bar | 2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area</p><h3>Example</h3><p className={_c.code}>lefttitle: <span className={_c.text}>'Test Left Title'</span></p></Fragment>}
                    {selectedItem === 20 && <Fragment><h2>Legend Position</h2><p>The Legend Position property will reposition the legend in the chart container in various ways.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Values</h3><p>TOP | BOTTOM</p><h3>Example</h3><p className={_c.code}>legendposition: <span className={_c.text}>'top'</span></p></Fragment>}
                    {selectedItem === 21 && <Fragment><h2>Line Styling</h2><p>The Line Styling property sets the styling of the lines for displaying data objects. Lines can appear dashed, hollowed or solid.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>NONE | DASHED</p><h3>Example</h3><p className={_c.code}>linestyling: <span className={_c.text}>'dashed'</span></p></Fragment>}
                    {selectedItem === 22 && <Fragment><h2>Names</h2><p>The Names property is similar to the titles property, however Names is generally used when comparing data objects or when you want to add more object specific information.</p><h3>Data Type</h3><p>string[]</p><h3>Compatibility</h3><p>2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area | Optional for all other graphs.</p><h3>Example</h3><p className={_c.code}>names: <span>[<span className={_c.text}>'test item 1'</span>, <span className={_c.text}>'test item 2'</span>, <span className={_c.text}>'test item 3'</span>, <span className={_c.text}>'test item 4'</span>, <span className={_c.text}>'test item 5'</span>]</span></p></Fragment>}
                    {selectedItem === 23 && <Fragment><h2>Offset</h2><p>The Offset property increases or decreases the dimension level of a graph to make it appear flat or elevated.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>{"0 -> 30 (min to max)"}</p><h3>Example</h3><p className={_c.code}>offset: <span className={_c.num}>15</span></p></Fragment>}
                    {selectedItem === 24 && <Fragment><h2>Point Radius</h2><p>The Point Radius sets the radius of each point within a graph such as the line chart where the radius can be increased or decreased.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Simple & Comparative Line</p><h3>Values</h3><p>{"0 -> 20 (min to max)"}</p><h3>Example</h3><p className={_c.code}>pointradius: <span className={_c.text}>'3'</span></p></Fragment>}
                    {selectedItem === 25 && <Fragment><h2>Ring Size</h2><p>The Ring Size property is a number value between 20 and 90 that sets the percentage of the ring size for a donut pie chart relative to the size of the outer-most region of the circle.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>2D & 3D PIE-DONUT</p><h3>Values</h3><p>{"20 -> 90 (min to max)"}</p><h3>Example</h3><p className={_c.code}>ringsize: <span className={_c.num}>55</span></p></Fragment>}
                    {selectedItem === 26 && <Fragment><h2>Show Bottom Title</h2><p>The Show Bottom Title property can either be set to true or false as to whether to show or hide the horizontally positioned bottom title text in the graph.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>2D & 3D Bar | 2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area</p><h3>Example</h3><p className={_c.code}>showbottomtitle: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 27 && <Fragment><h2>Show Description</h2><p>The Show Description property can either be set to true or false to show or hide the display of the description pop-up box on data object click or hover.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>showdescription: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 28 && <Fragment><h2>Show Left Title</h2><p>The Show Left Title property can either be set to true or false as to whether to show or hide the vertically positioned left title text in the graph.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>2D & 3D Bar | 2D & 3D Comparative Bar | Simple & Comparative Line | Simple & Comparative Area</p><h3>Example</h3><p className={_c.code}>showlefttitle: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 29 && <Fragment><h2>Show Legend</h2><p>The Show Legend property can either be set to true or false as to whether to show or hide the legend in the graph container.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Values</h3><p>true | false</p><h3>Example</h3><p className={_c.code}>showlegend: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 30 && <Fragment><h2>Show Percentage</h2><p>The Show Percentage property can either be set to true or false as to whether to show or hide the percent values displayed in the chart.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>true | false</p><h3>Example</h3><p className={_c.code}>showpercentage: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 31 && <Fragment><h2>Show Title</h2><p>The Show Title property can either be set to true or false as to whether to show or hide the title section in the graph container.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Values</h3><p>true | false</p><h3>Example</h3><p className={_c.code}>background: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 32 && <Fragment><h2>Spinnable</h2><p>The Spinnable property can either be set to true or false to enable for the spinning of Pie charts using the left mouse button and direction of your mouse.</p><h3>Data Type</h3><p>boolean</p><h3>Compatibility</h3><p>3D & 2D PIE DONUT | 3D & 2D PIE</p><h3>Values</h3><p>true | false</p><h3>Example</h3><p className={_c.code}>spinnable: <span className={_c.orange}>true</span></p></Fragment>}
                    {selectedItem === 33 && <Fragment><h2>Stroke Color</h2><p>The Stroke Color sets the color for the outline of a graph. The default outline color is black. Any color string you use may either be a hex or rgb value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Example</h3><p className={_c.code}>strokecolor: <span className={_c.text}>'#fff'</span></p></Fragment>}
                    {selectedItem === 34 && <Fragment><h2>Stroke Opacity</h2><p>The Point Radius sets the radius of each point within a graph such as the line chart where the radius can be increased or decreased.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Simple & Comparative Line</p><h3>Values</h3><p>{"0 -> 10 (min to max)"}</p><h3>Example</h3><p className={_c.code}>strokeopacity: <span className={_c.text}>'5'</span></p></Fragment>}
                    {selectedItem === 35 && <Fragment><h2>Stroke Width</h2><p>The Stroke Width property is a numeric value that sets the width of the outline of a graph in pixels.</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>{"0 -> 10 (min to max)"}</p><h3>Example</h3><p className={_c.code}>strokewidth: <span className={_c.text}>'1'</span></p></Fragment>}
                    {selectedItem === 36 && <Fragment><h2>Subtext Color</h2><p>The Subtext Color property sets the color of the subtitle property. The color string can either be a hex or rgb value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Example</h3><p className={_c.code}>subtextcolor: <span className={_c.text}>'#848484'</span></p></Fragment>}
                    {selectedItem === 37 && <Fragment><h2>Subtitle</h2><p>The Subtitle property provides a brief description about the title of the graph. The Subtitle text is generally smaller and has a lighter hue than the title.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Example</h3><p className={_c.code}>subtitle: <span className={_c.text}>'Test Sub Title'</span></p></Fragment>}
                    {selectedItem === 38 && <Fragment><h2>Text Size</h2><p>The Text Size property is a number value between 1 and 3 that sets the multiplicity of the text size for a graph relative to the size of the graph's container.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Values</h3><p>{"1 -> 3 (min to max)"}</p><h3>Example</h3><p className={_c.code}>textsize: <span className={_c.text}>'1'</span></p></Fragment>}
                    {selectedItem === 39 && <Fragment><h2>Tilt</h2><p>The Tilt property is a property used specifically for 3D Pie charts that tilts the orientation of a chart across the x-axis to allow for a more customized display.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>3D PIE DONUT | 3D PIE</p><h3>Values</h3><p>{"1 -> 10 (min to max)"}</p><h3>Example</h3><p className={_c.code}>tilt: <span className={_c.num}>1</span></p></Fragment>}
                    {selectedItem === 40 && <Fragment><h2>Title</h2><p>The Title property is the title of the graph that will be displayed to end-users.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Example</h3><p className={_c.code}>title: <span className={_c.text}>'Test Title'</span></p></Fragment>}
                    {selectedItem === 41 && <Fragment><h2>Title Color</h2><p>The Title Color property sets the color of the title property. The color string can either be a hex or rgb value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs.</p><h3>Example</h3><p className={_c.code}>titlecolor: <span className={_c.text}>'#242424'</span></p></Fragment>}
                    {selectedItem === 42 && <Fragment><h2>Titles</h2><p>The Titles property is an array of strings representing the title for each data object in the data property starting at position one respectfully.</p><h3>Data Type</h3><p>string[]</p><h3>Compatibility</h3><p>Required for 2D/3D Bar & Optional for all other graphs.</p><h3>Example</h3><p className={_c.code}>names: <span>[<span className={_c.text}>'title 1'</span>, <span className={_c.text}>'title 2'</span>, <span className={_c.text}>'title 3'</span>, <span className={_c.text}>'title 4'</span>, <span className={_c.text}>'title 5'</span>]</span></p></Fragment>}
                    {selectedItem === 43 && <Fragment><h2>Type</h2><p>The Type property sets the type of graph that you would like to display in your application.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Required for all graphs.</p><h3>Values</h3><p>PIE | PIE-DONUT | 3D-PIE | 3D-PIE-DONUT | BAR | 3D-BAR | STACKED-BAR | LINE | AREA</p><h3>Example</h3><p className={_c.code}>type: <span className={_c.text}>'PIE'</span></p></Fragment>}
                    {selectedItem === 44 && <Fragment><h2>Value Type</h2><p>The Value Type property sets the prefix or suffix for the values given for each object in the data property.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Optional for all graphs</p><h3>Values</h3><p>USD | EUR | JPY | Any other value will be displayed as a suffix</p><h3>Example</h3><p className={_c.code}>valuetype: <span className={_c.text}>'USD'</span></p></Fragment>}
                    {selectedItem === 45 && <Fragment><h2>Vertical Bar Color</h2><p>The Vertical Bar Color property sets the color of the vertical marker visible within a graph such as the area chart. Any color string you use may either be a hex or rgb value.</p><h3>Data Type</h3><p>string</p><h3>Compatibility</h3><p>Simple & Comparative Area</p><h3>Example</h3><p className={_c.code}>verticalbarcolor: <span className={_c.text}>'#242424'</span></p></Fragment>}
                    {selectedItem === 46 && <Fragment><h2>Vertical Bar Opacity</h2><p>The Vertical Bar Opacity property sets the opacity of the vertical marker visible within a graph such as the area chart.</p><h3>Data Type</h3><p>number</p><h3>Compatibility</h3><p>Simple & Comparative Area</p><h3>Values</h3><p>{"0 -> 10 (min to max)"}</p><h3>Example</h3><p className={_c.code}>verticalbaropacity: <span className={_c.text}>'5'</span></p></Fragment>}
                </div>
            </div>

        </div>
    )
};

export default Glossary;