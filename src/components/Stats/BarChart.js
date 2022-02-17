import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function BarChart({ data, parent }) {
    const ref = useRef();
    console.log(data);

    useEffect(() => {
        const margin = { top: 20, right: 20, bottom: 70, left: 40 };

        const width = 1200 - margin.left - margin.right;
        const height = 700 - margin.top - margin.bottom;
        const svg = d3.select(ref.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top);

        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right])
            .padding(0.3);

        svg.append('g')
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].title).tickSizeOuter(0));

        const maxValue = d3.max(data, (d) => parent === 'voteCount' ? d.vote_count : 10);

        const y = d3.scaleLinear()
            .domain([0, maxValue])
            .range([height, margin.top]);

        svg.append('g')
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
        svg.append("g")
            .attr("fill", "tomato")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(parent === 'voteCount' ? d.vote_count : d.vote_average))
            .attr("height", d => y(0) - y(parent === 'voteCount' ? d.vote_count : d.vote_average))
            .attr("width", x.bandwidth())



    }, [data, parent])

    return (
        <div id="charts">
            <svg ref={ref}></svg>
        </div>

    )

}

export default BarChart;
