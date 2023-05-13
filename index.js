import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
var data = [
    { year: 2011, value: 45 },
    { year: 2012, value: 47 },
    { year: 2013, value: 52 },
    { year: 2014, value: 70 },
    { year: 2015, value: 75 },
    { year: 2016, value: 78 },
];

const year = [2011, 2012, 2013, 2014, 2015, 2016];
const value = [45, 47, 52, 70, 75, 78];
var barHeight = 20;

const cx = 20;
const cy = 20;

const width = 500;
const height = 500;

const svg = d3.select(".chart").append('svg').attr("width", width).attr("height", height);

var xScale = d3.scaleBand().range([0, width]).padding(0.5),
    yScale = d3.scaleLinear().range([height, 0]);

const g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");
svg.data(data);

xScale.domain(year);
yScale.domain(value);
g
.append('g')
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(xScale));
g
.append('g')
.call(d3.axisLeft(yScale));
