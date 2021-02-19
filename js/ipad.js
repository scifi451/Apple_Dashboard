// Create our first trace
var quarterly = {
  name: 'iPad',
  y: [4.37, 2.633, 5.603, 6.562, 8.77, 6.26, 8.78, 7.13, 10.67, 8.75, 6.37, 6.19, 11.47, 7.61, 5.89, 5.32, 8.99, 5.43, 4.54, 4.28, 7.08, 4.41, 4.88, 4.26, 5.53, 3.89, 4.97, 4.83, 5.86, 4.01, 4.63, 4.09, 6.73, 4.87, 5.02, 4.66, 5.97, 4.36, 6.58, 6.79, 8.43],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
   type: "scatter",
  line: {
    color: 'rgb(248, 148, 39)',
    width: 2
  }
};

// The data array consists of both traces
var data = [quarterly];

// Apply the group barmode to the layout
var layout = {
  title: "iPad Revenue by Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("ipad", data, layout);


// Create our first trace
var yearly = {
  name: 'iPad',
  y: [19.168, 30.94, 31.98, 30.29, 23.24, 20.63, 19.22, 18.59, 21.28, 23.72],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
  type: "scatter",
  line: {
    color: 'rgb(248, 148, 39)',
    width: 2
  }
};

// The data array consists of iPad yearly  trace
var data = [yearly];

// Apply the group barmode to the layout
var layout = {
title: "iPad Revenue by Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for yearly numbers
Plotly.newPlot("ipad-year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/ipad.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = Plotly.d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [250,600,1000,900,600,500,1000,1000,1000],
  columnorder: [0,1,2,3,4,5,6,7,8,9],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(248, 148, 51)']},
    font: {family: "Arial", size: 16, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
      height: 26,
    line: {color: "black", width: 1},

    fill: {color: ['rgba(248, 148, 51, 0.65)','rgb(255, 255, 255)', 'rgba(248, 148, 51, 0.65)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]


var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});
