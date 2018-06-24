
//reference: https://medium.freecodecamp.org/how-to-create-your-first-bar-chart-with-d3-js-a0e8ea2df386


/*data*/
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

/*basic setup*/
let svgWidth = 500;
let svgHeight = 300;
const svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

let barPadding = 5;
let barWidth = (svgWidth / dataset.length);


/* create bar chart */
    //d = this-datapoint

let barChart = svg.selectAll("rect") //select existing points == none
    .data(dataset) //import dataset
    .enter() //create new d from dataset
    .append("rect") //executed for each

    //point pos y ( == pos d from top down)
    .attr("y", function(d) {
        return svgHeight - d
    })

    // individual height (val of d)
    .attr("height", function(d) {
        return d;
    })

    // global bar width
    .attr("width", barWidth - barPadding)

    // pos x
    .attr("transform", function (d, i) {
        var xCoordinate = barWidth * i;
        return "translate("+ xCoordinate +")";
    });

    

