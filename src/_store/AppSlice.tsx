import {createSlice} from "@reduxjs/toolkit";
import AppGlobals from "../Models/AppGlobals";

const names2 = ['Apple', 'Samsung', 'Google'];
const names5 = ['test item 1', 'test item 2', 'test item 3', 'test item 4', 'test item 5'];
const names6 = ['1', '2', '3', '4', '5'];
const names7 = ['Texas Census', 'Colorado Census', 'California Census'];
const colors2 = ['rgb(63,98,181,1)', 'rgb(242,114,111,1)', 'rgb(41,195,190,1)'];
const colors5 = ['rgb(63,98,181,0.5)', 'rgb(41,195,190,0.5)', 'rgb(242,114,111,0.5)', 'rgb(255,197,51,0.5)', 'rgb(98,181,143,0.5)'];
const colors3 = ['rgb(63,98,181,1)', 'rgb(242,114,111,1)', 'rgb(41,195,190,1)'];
let pieDataMain = [
    [
        {
            name: 'test item 1',
            color: 'rgb(63,98,181,1)',
            value: 35
        }, {
        name: 'test item 2',
        color: 'rgb(41,195,190,1)',
        value: 350
    },
        {
            name: 'test item 3',
            color: 'rgb(242,114,111,1)',
            value: 35
        },
        {
            name: 'test item 4',
            color: 'rgb(255,197,51,1)',
            value: 45
        },
        {
            name: 'test item 5',
            color: 'rgb(98,181,143,1)',
            value: 60
        }
    ]
];
let pieData2 = [
    [
        {
            name: 'test item 1',
            color: 'rgb(63,98,181)',
            value: 35
        }, {
        name: 'test item 2',
        color: 'rgb(41,195,190)',
        value: 50
    },
        {
            name: 'test item 3',
            color: 'rgb(242,114,111)',
            value: 35
        },
        {
            name: 'test item 4',
            color: 'rgb(255,197,51)',
            value: 45
        },
        {
            name: 'test item 5',
            color: 'rgb(98,181,143)',
            value: 60
        }
    ]
];
let barComparativeData = [

    [
        {
            value: 70
        },
        {
            value: 34
        },
        {
            value: 50
        }
    ], [
        {
            value: 50
        }, {
            value: 90
        }, {
            value: 60
        }
    ], [
        {
            value: 30
        }, {
            value: 100
        }, {
            value: 24
        }
    ], [
        {
            value: 40
        }, {
            value: 36
        }, {
            value: 95
        }
    ], [
        {
            value: 25
        }, {
            value: 130
        }, {
            value: 56
        }
    ]
];
let barData = [

    [
        {
            value: 70
        }
    ], [
        {
            value: 50
        }
    ], [
        {
            value: 30
        }
    ], [
        {
            value: 40
        }
    ], [
        {
            value: 25
        }
    ]
];
const pieJsonObj = {
    id: 'demo0',
    title: 'Test Pie Chart',
    subtitle: 'Test Sub Title',
    type: 'pie',
    background: 'transparent',
    showlegend: true,
    showtitle: true,
    textsize: '1',
    chartSize: '2',
    ringsize: 55,
    offset: 15,
    strokewidth: '1',
    strokecolor: '#444',
    labeltextcolor: '#545454',
    pointradius: '5',
    strokeopacity: '5',
    verticalbarcolor: '#000',
    verticalbaropacity: '1',
    fillopacity: '10',
    showlefttitle: true,
    showbottomtitle: true,
    valuetype: ' kwh',
    divisions: 5,
    tilt: 1,
    labelForEach: true,
    showdescription: true,
    spinnable: true,
    descriptionborder: 'solid #787878 1px',
    descriptionborderradius: '0',
    linestyling: 'none',
    titlecolor: '#242424',
    subtextcolor: '#848484',
    descriptioncolor: 'rgba(255,255,255,1)',
    descriptiontextcolor: 'rgba(80,80,80,1)',
    introanimation: 'draw',
    lefttitle: 'left title test',
    bottomtitle: 'Years',
    showpercentage: true,
    legendposition: 'bottom',
    graphstyling: 'none',
    fontfamily: '\'Poppins\', sans-serif',
    labelstyling: 'spider',
    labelcolorisitemcolor: false,
    description: 'This is a $name test description: $value and $title',
    titles: ['1990', '1995', '2000', '2005', '2010'],
    colors: colors3,
    names: names5,
    data: pieDataMain
};
const pieJsonObj2 = pieJsonObj;
const initialState = {
    hideIntro: false,
    chartWidth: '600px',
    colorMode: true,
    showModal: false,
    fwIndex:0,
    typeIndex:0,
    index: 0,
    pieDataMain,
    names2,
    names5,
    names7,
    names6,
    colors2,
    colors3,
    colors5,
    barData,
    pieData2,
    pieJsonObj,
    pieJsonObj2,
    barComparativeData,
} as AppGlobals;

const AppSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        hideIntroHandler(state) {
            state.hideIntro = true;
        },
        toggleChart(state, action) {
            state.pieJsonObj = {...state.pieJsonObj2};
            state.index = action.payload;
            chartSetting(state, action);
        },
        toggleModal(state){
            state.showModal = !state.showModal;
        },
        toggleMode(state){
            state.colorMode = !state.colorMode;
            if(!state.colorMode){
                state.pieJsonObj2.strokecolor = "#fff";
                state.pieJsonObj2.subtextcolor = "#fff";
                state.pieJsonObj2.titlecolor = "#f1f1f1";
                state.pieJsonObj2.labeltextcolor = "#fff";
                state.pieJsonObj2.strokeopacity = "10";
                state.pieJsonObj2.verticalbarcolor = "#fff";
                state.pieJsonObj2.verticalbaropacity = "5";
            }else{
                state.pieJsonObj2.strokecolor = "#444";
                state.pieJsonObj2.subtextcolor = "#848484";
                state.pieJsonObj2.titlecolor = "#242424";
                state.pieJsonObj2.labeltextcolor = "#545454";
                state.pieJsonObj2.strokeopacity = "5";
                state.pieJsonObj2.verticalbarcolor = "#000";
                state.pieJsonObj2.verticalbaropacity = "1";
            }
            state.pieJsonObj = {...state.pieJsonObj2};
            chartSetting(state, {payload: state.index});
        },
        frameworkIndex(state,action) {
            state.fwIndex = action.payload;
        },
        chartTypeIndex(state, action){
            state.typeIndex = action.payload;
        }
    }
});

const chartSetting = (state: AppGlobals, action: { payload: any; type?: string; }) => {
    if(action.payload === 0 && state.typeIndex === 0){
        state.pieJsonObj.id = 'demo0';
        state.pieJsonObj.type = 'PIE';
        state.pieJsonObj.data = state.pieDataMain;
        state.pieJsonObj.title = 'Test Pie Chart';
        state.pieJsonObj.chartSize = '2';
        state.chartWidth = '600px';
    }else if(action.payload === 1 && state.typeIndex === 0){
        state.pieJsonObj.type = 'PIE-DONUT';
        state.pieJsonObj.id = 'demo1';
        state.pieJsonObj.data = state.pieDataMain;
        state.pieJsonObj.title = 'Test Pie-Donut Chart';
        state.pieJsonObj.chartSize = '2';
        state.chartWidth = '600px';
    }else if(action.payload === 2 && state.typeIndex === 0){
        state.pieJsonObj.type = '3D-PIE';
        state.pieJsonObj.id = 'demo2';
        state.pieJsonObj.data = pieData2;
        state.pieJsonObj.names = state.names5;
        state.pieJsonObj.title = 'Test 3D-Pie Chart';
        state.pieJsonObj.chartSize = '1';
        state.chartWidth = '600px';
    }else if(action.payload === 3 && state.typeIndex === 0){
        state.pieJsonObj.type = '3D-PIE-DONUT';
        state.pieJsonObj.id = 'demo3';
        state.pieJsonObj.data = state.pieData2;
        state.pieJsonObj.chartSize = '1';
        state.pieJsonObj.title = 'Test 3D-Pie Donut Chart';
        state.pieJsonObj.names = state.names5;
        state.chartWidth = '600px';
    }else if(action.payload === 0 && state.typeIndex === 1){
        state.pieJsonObj.type = 'BAR';
        // @ts-ignore
        state.pieJsonObj.data = state.barData;
        state.pieJsonObj.id = 'demo4';
        state.pieJsonObj.title = 'Test Bar Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.colors = state.colors5;
        state.pieJsonObj.names = names5;
        state.chartWidth = '';
    }else if(action.payload === 1 && state.typeIndex === 1){
        state.pieJsonObj.type = 'BAR';
        // @ts-ignore
        state.pieJsonObj.data = barComparativeData;
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.id = 'demo5';
        state.pieJsonObj.title = 'Test Comparative Bar Chart';
        state.pieJsonObj.names = names2;
        state.pieJsonObj.colors = colors2;
        state.chartWidth = '';
    }else if(action.payload === 2 && state.typeIndex === 1){
        state.pieJsonObj.type = '3D-BAR';
        // @ts-ignore
        state.pieJsonObj.data = barData;
        state.pieJsonObj.id = 'demo6';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.title = 'Test 3D-Bar Chart';
        state.pieJsonObj.colors = colors5;
        state.pieJsonObj.offset = 15;
        state.pieJsonObj.names = names5;
        state.chartWidth = '';
    } else if(action.payload === 3 && state.typeIndex === 1){
        state.pieJsonObj.type = '3D-BAR';
        state.pieJsonObj.id = 'demo7';
        state.pieJsonObj.title = 'Test 3D Comparative Bar Chart';
        // @ts-ignore
        state.pieJsonObj.data = barComparativeData;
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.names = names2;
        state.pieJsonObj.offset = 15;
        state.pieJsonObj.colors = colors2;
        state.chartWidth = '';
    }else if(action.payload === 0 && state.typeIndex === 2){
        state.pieJsonObj.type = 'LINE';
        // @ts-ignore
        state.pieJsonObj.data = barData;
        state.pieJsonObj.id = 'demo9';
        state.pieJsonObj.title = 'Test Line Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.colors = colors3;
        state.pieJsonObj.names = names7;
        state.pieJsonObj.offset = 15;
        state.chartWidth = '';
    }else if(action.payload === 1 && state.typeIndex === 2){
        state.pieJsonObj.type = 'LINE';
        // @ts-ignore
        state.pieJsonObj.data = barComparativeData;
        state.pieJsonObj.title = 'Test Comparative Line Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.id = 'demo10';
        state.pieJsonObj.colors = colors3;
        state.pieJsonObj.offset = 15;
        state.pieJsonObj.names = names7;
        state.chartWidth = '';
    }else if(action.payload === 0 && state.typeIndex === 3){
        state.pieJsonObj.type = 'AREA';
        // @ts-ignore
        state.pieJsonObj.data = barData;
        state.pieJsonObj.title = 'Test Line Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.colors = colors3;
        if(state.colorMode){
            state.pieJsonObj.fillopacity = "5";
        }else{
            state.pieJsonObj.fillopacity = "8";
        }
        state.pieJsonObj.offset = 0;
        state.pieJsonObj.names = names7;
        state.pieJsonObj.id = 'demo11';
        state.chartWidth = '';
    }else if(action.payload === 1 && state.typeIndex === 3){
        state.pieJsonObj.type = 'AREA';
        // @ts-ignore
        state.pieJsonObj.data = barComparativeData;
        state.pieJsonObj.title = 'Test Comparative Line Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.colors = colors3;
        state.pieJsonObj.id = 'demo12';
        if(state.colorMode){
            state.pieJsonObj.fillopacity = "5";
        }else{
            state.pieJsonObj.fillopacity = "8";
        }
        state.pieJsonObj.offset = 0;
        state.pieJsonObj.names = names7;
        state.chartWidth = '';
    }else{
        state.pieJsonObj.type = 'STACKED-BAR';
        // @ts-ignore
        state.pieJsonObj.data = barComparativeData;
        state.pieJsonObj.title = 'Test Stacked Bar Chart';
        state.pieJsonObj.chartSize = '3';
        state.pieJsonObj.id = 'demo8';
        state.pieJsonObj.colors = colors3;
        state.pieJsonObj.offset = 0;
        state.pieJsonObj.names = names7;
        state.chartWidth = '';
    }
};

export const appActions = AppSlice.actions;

export default AppSlice;