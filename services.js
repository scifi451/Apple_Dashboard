// Create our first trace
var services = {
    y: [2.147, 2.384, 2.338, 2.504, 3.02, 3.17, 3.2, 3.5, 3.69, 4.11, 3.99, 4.26, 4.4, 4.57, 4.49, 4.61, 4.8, 5, 5.03, 5.09, 6.06, 5.99, 5.98, 6.33, 7.17, 7.04, 7.27, 8.5, 8.47, 9.85, 10.17, 9.98, 10.88, 11.45, 11.46, 12.51, 12.71],
    x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20"],
    type: "scatter",
    line: {
      color: 'rgb(168, 86, 169)',
      width: 2
    }
};

// The data array consists of both traces
var data = [services];

// Apply the group barmode to the layout
var layout = {
  title: "Services Revenue by Fiscal Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("services", data, layout);

// Create our second trace
var yearly = {
  y: [12.89, 16.05, 18.07, 19.92, 24.36, 29.98, 38.47, 46.3],
  x: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(168, 86, 169)',
    width: 2
  }
};

// The data array consists of the trace
var data = [yearly];

// Apply the group barmode to the layout
var layout = {
title: "Services Revenue by Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for yearly numbers
Plotly.newPlot("services-year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/services.csv", function(err, rows){

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
    fill: {color: ['rgb(168, 86, 169)']},
    font: {family: "Arial", size: 16, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
      height: 26,
    line: {color: "black", width: 1},

    fill: {color: ['rgba(168, 86, 169, 0.65)','rgb(255, 255, 255)', 'rgba(168, 86, 169, 0.65)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]


var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});
