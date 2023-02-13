import React from "react";
import ChartBar from './ChartBar'
import './chart.css'



const Chart = (props) => {
    const value = props.data.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...value);


    return <div className= "chart">
        {props.data.map(dataPoint => <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
        ></ChartBar>)}
    </div>
};


export default Chart;