// Create our first trace
  var quarterly = {
    name: 'iPhone',
    y: [10.239, 12.053, 13.102, 10.604, 23.95, 22.28, 15.82, 16.65, 30.66, 22.96, 18.15, 19.51, 32.5, 26.06, 19.75, 23.68, 51.18, 40.28, 31.37, 32.21, 51.64, 32.86, 24.05, 28.16, 54.38, 33.25, 24.85, 28.85, 61.58, 37.56, 29.47, 37.19, 51.98, 31.05, 25.99, 33.36, 55.95, 28.96, 26.42, 26.44, 65.59],
    
    x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
    type: "scatter",
    line: {
        color: 'rgb(253, 195, 51)',
        width:2
      }
  };
  // The data array consists of both traces
var data = [quarterly];

// Apply the group barmode to the layout
var layout = {
  title: "iPhone Revenue by Fiscal Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("iphone", data, layout);

// Create our second trace
var yearly = {
  name: 'iPhone',
  y: [45.998, 78.7, 91.28, 101.99, 155.04, 136.71, 141.33, 165.8, 142.38, 137.78],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
  type: "scatter",
  line: {
    color: 'rgb(253, 195, 51)',
    width: 2
  }
};

// The data array consists of both traces
var data = [yearly];

// Apply the group barmode to the layout
var layout = {
title: "iPhone Revenue by Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for yearly numbers
Plotly.newPlot("iphone-year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/iphone.csv", function(err, rows){

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
    fill: {color: ['rgb(253, 195, 51)']},
    font: {family: "Arial", size: 16, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
      height: 26,
    line: {color: "black", width: 1},

    fill: {color: ['rgba(253, 195, 51, 0.65)','rgb(255, 255, 255)', 'rgba(253, 195, 51, 0.65)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]


var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});