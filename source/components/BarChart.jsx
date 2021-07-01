/**
 * Author : Govind Maheshwari
 * Description : This file use to generate the bar graph based on the provide data.
 * It is using the D3 library to generate the graph.
 */
import React, { Component } from 'react';
import * as d3 from 'd3'
import styles from "./BarCharts.css"
class BarChart extends Component {
    componentDidMount() {
        this.drawBarChart();
    }
    drawBarChart()  {
        const data = this.props.data;
        const xOffset=data.length;
        const canvasHeight = 200
        const canvasWidth = 180
        const scale = 5
        const xData = this.props.dataLabels;
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
        
        let x = d3.scaleBand().rangeRound([0, canvasWidth-20]).padding(0.1);
        x.domain(xData);
        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * (canvasWidth/xOffset))
                .attr("y", (datapoint) => canvasHeight - datapoint * scale)
                .attr("transform", "translate(0," + -20 + ")")

                svgCanvas.selectAll("text")
                .data(data).enter()
                    .append("text")
                    .attr("x", (dataPoint, i) => i * (canvasWidth/xOffset) + 10)
                    .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 30)
                    .text(dataPoint => dataPoint)  
                    
                    svgCanvas.append("g").style("font", "14px times").attr("transform", "translate(0," + canvasWidth + ")").call(d3.axisBottom(x)); 
                   
                
        }
    render() 
    { 
        return <div className={styles.barChart} ref="canvas"><div>{this.props.countLabel}</div></div> 
    }
}
export default BarChart