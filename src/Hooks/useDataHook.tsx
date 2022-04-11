const useData = () => {
    const listOfPieCharts = ['2D Pie', '2D Pie-Donut', '3D Pie', '3D Pie-Donut'];
    const listOfBarCharts = ['2D-Bar', '2D-Comparative-Bar', '3D-Bar', '3D Comparative-Bar', 'Stacked-Bar'];
    const listOfLineCharts = ['Line', 'Line-Comparative'];
    const listOfAreaCharts = ['Area', 'Area-Comparative'];
    const listOfChartSections = ['Pie', 'Bar', 'Line', 'Area'];
    const frameworkNames = ['JavaScript', 'ReactJS', 'Angular'];

    return {
        listOfPieCharts,
        listOfBarCharts,
        listOfLineCharts,
        listOfAreaCharts,
        listOfChartSections,
        frameworkNames
    }
};

export default useData;