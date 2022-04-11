import React, {Fragment, useState} from 'react';
import _c from './App.module.css';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import Intro from "./components/Intro/Intro";
import ReactDOM from 'react-dom';
import appActions from './_store/AppSlice';
import Header from './components/Header/Header';
import GraphXDisplay from "./components/GraphXDisplay/GraphXDisplay";
import ToggleButtonsList from "./components/ToggleButtonsList/ToggleButtonsList";
import ChartButtonList from './components/ChartButtonList/ChartButtonList';
import HeadLiner from "./components/HeadLiner/HeadLiner";
import useData from "./Hooks/useDataHook";
import Modal from "./components/Modal/Modal";
import Glossary from "./components/Glossary/Glossary";

const App = () => {
    const {listOfChartSections, listOfAreaCharts, listOfLineCharts, listOfBarCharts, listOfPieCharts, frameworkNames} = useData();
    const pieJsonObj = useSelector((state: RootStateOrAny) => state.app.pieJsonObj);
    const chartWidth = useSelector((state: RootStateOrAny) => state.app.chartWidth);
    const chartIndex = useSelector((state: RootStateOrAny) => state.app.index);
    const hideIntro = useSelector((state: RootStateOrAny) => state.app.hideIntro);
    const typeIndex = useSelector((state: RootStateOrAny) => state.app.typeIndex);
    const fwIndex = useSelector((state: RootStateOrAny) => state.app.fwIndex);
    const colorMode = useSelector((state: RootStateOrAny) => state.app.colorMode);

    const dispatch = useDispatch();
    const overlay = document.getElementById('overlay') as HTMLDivElement;
    const [chartList, setChartList] = useState(listOfPieCharts);
    const [chartTitle, setChartTitle] = useState(listOfPieCharts[0]);
    const [chartNum, setChartNum] = useState(0);
    const [typeClick, setTypeClick] = useState(false);
    const [showGlossaryModal, setShowGlossaryModal] = useState(false);

    const chartToggleHandler = (index: number) => {
        if (typeIndex === 1) {
            setChartNum(index + 4);
        } else if (typeIndex === 2) {
            setChartNum(index + 9);
        } else if (typeIndex === 3) {
            setChartNum(index + 11);
        } else {
            setChartNum(index);
        }
        dispatch(appActions.actions.toggleChart(index));
        setChartTitle(chartList[index]);
    };
    const showGlossaryModalHandler = () => {
        setShowGlossaryModal(prevState => !prevState);
    }

    const updateFrameworkIndex = (index: number) => {
        dispatch(appActions.actions.frameworkIndex(index));
    };
    const updateChartTypeIndex = (index: number) => {
        setTypeClick(prevState => !prevState);
        switch (index) {
            case 0:
                setChartList(listOfPieCharts);
                setChartTitle(listOfPieCharts[0]);
                break;
            case 1:
                setChartList(listOfBarCharts);
                setChartTitle(listOfBarCharts[0]);
                break;
            case 2:
                setChartList(listOfLineCharts);
                setChartTitle(listOfLineCharts[0]);
                break;
            case 3:
                setChartList(listOfAreaCharts);
                setChartTitle(listOfAreaCharts[0]);
                break;
            default:
                setChartList(listOfPieCharts);
                setChartTitle(listOfPieCharts[0]);
                break;
        }
        dispatch(appActions.actions.chartTypeIndex(index));
        dispatch(appActions.actions.toggleChart(0));
    };

    return (
        <main className={showGlossaryModal ? _c.blur : ''}>
            <Header/>
            {!hideIntro && ReactDOM.createPortal(<Intro/>, overlay)}
            {showGlossaryModal && ReactDOM.createPortal(<Fragment><Modal onToggle={showGlossaryModalHandler}
                                                                         mode={"DARK"}/><Glossary mode={colorMode}/></Fragment>, overlay)}
            <div className={`${_c.appBody} ${!colorMode ? _c["appBody-Dark"] : ''}`}>
                <HeadLiner mode={colorMode}/>
                <ToggleButtonsList names={frameworkNames} sendIndex={updateFrameworkIndex} type={"Frameworks"} mode={colorMode}/>
                <ToggleButtonsList names={listOfChartSections} sendIndex={updateChartTypeIndex} type={"Chart Types"} mode={colorMode}/>
                <ChartButtonList listOfCharts={chartList} sendIndex={chartToggleHandler} typeIndex={typeIndex}
                                 showDocModal={showGlossaryModalHandler} chartIndex={chartIndex} typeClick={typeClick} mode={colorMode}/>
                <GraphXDisplay chart={chartNum} title={chartTitle} chartWidth={chartWidth} pieJsonObj={pieJsonObj}
                               chartType={typeIndex} framework={fwIndex} mode={colorMode}/>
            </div>
        </main>
    );
}

export default App;
