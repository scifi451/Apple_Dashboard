// Create our first trace
var quarterly = {
  name: 'Mac',
  y: [5.43, 4.976, 5.105, 6.272, 6.6, 5.07, 4.93, 6.62, 5.52, 5.45, 4.89, 5.62, 6.4, 5.52, 5.54, 6.63, 6.94, 5.62, 6.03, 6.88, 6.75, 5.11, 5.24, 5.74, 7.24, 5.84, 5.59, 7.17, 6.9, 5.78, 5.26, 7.41, 7.42, 5.51, 5.82, 6.99, 7.16, 5.35, 7.08, 9.03,8.68],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21", "2Q '21", "3Q '21"],
  type: "scatter",
  line: {
    color: 'rgb(115, 194, 92)',
    width: 2
  }
};

  // The data array consists of the trace
var data = [quarterly];

// Apply the group barmode to the layout
var layout = {
  title: "Mac Revenue by Fiscal Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("mac", data, layout);

// Create our second trace
var yearly = {
  name: 'Mac',
  y: [21.783, 23.22, 21.48, 24.09, 25.47, 22.84, 25.84, 25.35, 25.74, 28.62],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
  type: "scatter",
  line: {
    color: 'rgb(115, 194, 92)',
    width: 2
  }
};

// The data array consists of both traces
var data = [yearly];

// Apply the group barmode to the layout
var layout = {
title: "Mac Revenue by Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for yearly numbers
Plotly.newPlot("mac-year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/mac.csv", function(err, rows){

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
    fill: {color: ['rgb(115, 194, 92)']},
    font: {family: "Arial", size: 16, color: "black"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
      height: 26,
    line: {color: "black", width: 1},

    fill: {color: ['rgba(115, 194, 92, 0.65)','rgb(255, 255, 255)', 'rgba(115, 194, 92, 0.65)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]


var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});
