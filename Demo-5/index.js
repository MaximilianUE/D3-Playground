
let data = [
    {"character": "Shantae", "percentage": 17.79}, 
    {"character": "Shovel Knight", "percentage": 12.52},
    {"character": "Waluigi", "percentage": 69.69}
];

/**
 * planed structure:
 * svg.container
 *      g.PieGroup
 *          g.pieceOfCake
 *              path.pieceOfCake--arc
 *              text.pieceOfCake--label
 *          g.pieceOfCake
 *              path.pieceOfCake--arc
 *              text.pieceOfCake--label
 *           g.pieceOfCake
 *              path.pieceOfCake--arc
 *              text.pieceOfCake--label
**/

//container
let svgWidth = 500,
    svgHeight = 300,
    radius =  Math.min(svgWidth, svgHeight) / 2; //Math.min() returns smallest possible value

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//pieGroup
let g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")  //center pie chart
    .attr("class", "PieGroup");


let pie = d3.pie().value(d => d.percentage ); //get data value "percentage"

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

//pieceOfCake
let arc = g.selectAll("arc")
    .data( pie(data) ).enter()
        .append("g")
            .attr("class", "pieceOfCake");


let color = d3.scaleOrdinal(d3.schemeDark2); //get colors via presets 

//pieceOfCake--arc
arc.append("path")
    .attr("d", path)
    .attr( "fill", d => color(d.data.percentage) )
    .attr("class", "pieceOfCake--arc");
 

//Create labels 
let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

//pieceOfCake--label
arc.append("text")
    .attr( "transform", d => "translate(" + label.centroid(d) + ")" ) //centroid = middle of an arc; vertical align
    .attr("text-anchor", "middle") //horiziontal align
    .text(d => d.data.character+":"+d.data.percentage+"%" )
    .attr("class", "pieceOfCake--label");