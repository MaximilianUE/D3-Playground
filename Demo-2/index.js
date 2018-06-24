
//reference: https://medium.freecodecamp.org/learn-d3-js-in-5-minutes-c5ec29fb0725

//custom font
d3.select('h3').style('color', 'darkblue');
d3.select('h3').style('font-size', '24px');


//full in data into ul

/*data*/
var fruits = ['apple', 'mango', 'banana', 'orange'];

d3.select('ul')
    .selectAll('li') //select all => none
    .data(fruits)
    .enter() //from her on once per d
    .append('li')
    .text(d => d);


//edit svg

var svg = d3.select('svg');

//Create rectangle element inside SVG
svg.append('rect')
//starts in 0 top /0 left
   .attr('x', 0)
   .attr('y', 50)
   .attr('width', 200)
   .attr('height', 100)
   .attr('fill', 'purple');

// another bar chart, hurray!

var data = [80, 120, 60, 150, 10, 200];

var barHeight = 20;

var bar = d3.select('#bar')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('width', d => d)
          .attr('height', barHeight - 1) //1 = padding
          .attr('transform', function(d, i) {
            return "translate(0," + i * barHeight + ")";
          });


//basic event handling

d3.select('#btn').on('click', function () {
        d3.select('body')
            .append('h3')
            .text('Event fired!');
});
