// @ts-nocheck
const useChartJson = (json: {}, chartType: number) => {
        delete json.labelcolorisitemcolor;
        if(chartType === 0){
                delete json.colors;
                delete json.names;
        }
        delete json.legendposition;
        delete json.graphstyling;
        delete json.descriptionborderradius;
        delete json.linestyling;
        delete json.fontfamily;
        delete json.showlegend;
        delete json.showtitle;
        delete json.background;
        json.description = json.description.replace('$name', '');
        delete json.chartSize;
        delete json.strokewidth;
        delete json.verticalbarcolor;
        delete json.verticalbaropacity;
        delete json.pointradius;
        delete json.fillopacity;
        delete json.showlefttitle;
        delete json.showdescription;
        delete json.showlegend;
        delete json.showtitle;
        delete json.showbottomtitle;
        delete json.labelForEach;
        delete json.spinnable;
        delete json.descriptionborder;
        delete json.introanimation;
        delete json.showpercentage;
        delete json.bottomtitle;
        delete json.lefttitle;
        delete json.tilt;
        delete json.divisions;
        delete json.valuetype;
        delete json.ringsize;
        delete json.offset;
        delete json.labelstyling;
        delete json.descriptioncolor;
        delete json.descriptiontextcolor;
        delete json.strokeopacity;
        delete json.labeltextcolor;
        delete json.strokecolor;
        delete json.titlecolor;
        delete json.subtextcolor;
    return {
        newJsonObj: json
    }
};

export default useChartJson;