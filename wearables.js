// Create our first trace
var trace1 = {
    y: [4, 2.4, 2.29, 2.08, 3.97, 2.34, 1.91, 1.89, 2.84, 1.88, 1.77, 1.9, 2.69, 1.69, 2.64, 3.05, 4.35, 2.19, 2.22, 2.37, 4.02, 2.87, 2.74, 3.23, 5.49, 3.94, 3.73, 4.23, 7.31, 5.13, 5.53, 6.52, 10.01],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20"],
    type: "scatter",
    line: {
      color: 'rgb(231, 82, 79)',
      width: 2
    }
};
  

  // The data array consists of both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "Wearables, Home and Accessories Revenue by Fiscal Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("wearables", data, layout);

// Create our second trace
var yearly = {
  y: [10.77, 10.11, 8.39, 10.07, 11.13, 12.86, 17.39, 24.49],
  x: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(231, 82, 79)',
    width: 2
  }
};

// The data array consists of the trace
var data = [yearly];

// Apply the group barmode to the layout
var layout = {
title: "Wearables, Home and Accessories Revenue by Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for yearly numbers
Plotly.newPlot("wearables-year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/wearables.csv", function(err, rows){

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
    fill: {color: ['rgb(231, 82, 79)']},
    font: {family: "Arial", size: 16, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
      height: 26,
    line: {color: "black", width: 1},

    fill: {color: ['rgba(231, 82, 79, 0.65)','rgb(255, 255, 255)', 'rgba(231, 82, 79, 0.65)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]
// color: 'rgb(231, 82, 79)',

var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});
