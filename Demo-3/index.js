
let data = [80, 120, 60, 150, 10, 200];

//let data = [1, 3, 5, 7, 4];

let svgWidth = 500, 
    svgHeight = 300;

//svg size
let svg = d3.select('#bar')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let barPadding = 5,
    barWidth = svgWidth / data.length;


//scale according to highest value
let yScale = d3.scaleLinear()
    .domain([0, d3.max(data)]) // lowest, highest value
    .range([0, svgHeight]); //keep inside svg container

//bar chart
let barChart = svg.selectAll('rect')
    .data(data).enter()
        .append('rect')
            .attr('y', d => svgHeight - yScale(d) )
            .attr('width', barWidth - barPadding)
            .attr('height', d => yScale(d) )
            .attr('transform', function(d, i) {
                let translate = [barWidth * i, 0];
                return "translate("+translate+")";
            })

//labels
let label = svg.selectAll('text')
    .data(data).enter()
        .append('text')
            .text( d => d)
            .attr('y', function(d, i) {
                return svgHeight -  yScale(d) + 20;
            })
            .attr('x', function(d, i) {
                return barWidth * i + (0.4 * barWidth);
            })
            .attr('fill', '#A64C38');