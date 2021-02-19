// Create our first trace
var iphone = {
  name: 'iPhone',
  y: [10.239, 12.053, 13.102, 10.604, 23.95, 22.28, 15.82, 16.65, 30.66, 22.96, 18.15, 19.51, 32.5, 26.06, 19.75, 23.68, 51.18, 40.28, 31.37, 32.21, 51.64, 32.86, 24.05, 28.16, 54.38, 33.25, 24.85, 28.85, 61.58, 37.56, 29.47, 37.19, 51.98, 31.05, 25.99, 33.36, 55.95, 28.96, 26.42, 26.44, 65.59],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
  type: "scatter",
  line: {
      color: 'rgb(253, 195, 51)',
      width:2
    }
};

// Create our second trace
var mac = {
  name: 'Mac',
  y: [5.43, 4.976, 5.105, 6.272, 6.6, 5.07, 4.93, 6.62, 5.52, 5.45, 4.89, 5.62, 6.4, 5.52, 5.54, 6.63, 6.94, 5.62, 6.03, 6.88, 6.75, 5.11, 5.24, 5.74, 7.24, 5.84, 5.59, 7.17, 6.9, 5.78, 5.26, 7.41, 7.42, 5.51, 5.82, 6.99, 7.16, 5.35, 7.08, 9.03,8.68],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
  type: "scatter",
  line: {
    color: 'rgb(115, 194, 92)',
    width: 2
  }
};

// Create our third trace
var ipad = {
  name: 'iPad',
  y: [4.37, 2.633, 5.603, 6.562, 8.77, 6.26, 8.78, 7.13, 10.67, 8.75, 6.37, 6.19, 11.47, 7.61, 5.89, 5.32, 8.99, 5.43, 4.54, 4.28, 7.08, 4.41, 4.88, 4.26, 5.53, 3.89, 4.97, 4.83, 5.86, 4.01, 4.63, 4.09, 6.73, 4.87, 5.02, 4.66, 5.97, 4.36, 6.58, 6.79, 8.43],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
   type: "scatter",
  line: {
    color: 'rgb(248, 148, 39)',
    width: 2
  }
};

// Create our forth trace
var other = {
  name: 'Wearables Etc',
  y: [1.13, 1.021, 1.098, 1.225, 4, 2.4, 2.29, 2.08, 3.97, 2.34, 1.91, 1.89, 2.84, 1.88, 1.77, 1.9, 2.69, 1.69, 2.64, 3.05, 4.35, 2.19, 2.22, 2.37, 4.02, 2.87, 2.74, 3.23, 5.49, 3.94, 3.73, 4.23, 7.31, 5.13, 5.53, 6.52, 10.01, 6.28, 6.45, 7.87, 12.97 ],
  
  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
  type: "scatter",
  line: {
    color: 'rgb(231, 82, 79)',
    width: 2
  }
};

// Create our fifth trace
var services = {
  name: 'Services',
  y: [2.147, 2.384, 2.338, 2.504, 3.02, 3.17, 3.2, 3.5, 3.69, 4.11, 3.99, 4.26, 4.4, 4.57, 4.49, 4.61, 4.8, 5, 5.03, 5.09, 6.06, 5.99, 5.98, 6.33, 7.17, 7.04, 7.27, 8.5, 8.47, 9.85, 10.17, 9.98, 10.88, 11.45, 11.46, 12.51, 12.71, 13.34, 13.16, 14.54,15.76],

  x: ["1Q '11", "2Q '11", "3Q '11", "4Q '11", "1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20", "2Q '20", "3Q '20", "4Q '20", "1Q '21"],
  line: {
    color: 'rgb(168, 86, 169)',
    width: 2
  }
};

// The data array consists of all traces
var data = [iphone, mac, ipad, other, services];

// Apply the group barmode to the layout
var layout = {
title: "All Product Segments Fiscal Quarter",
xaxis: { title: "Quarter" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("combined", data, layout);

// Create our first trace
var ipad_yearly = {
  name: 'iPad',
  y: [19.168, 30.94, 31.98, 30.29, 23.24, 20.63, 19.22, 18.59, 21.28],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(248, 148, 39)',
    width: 2
  }
};

// Create our second trace
var iphone_yearly = {
  name: 'iPhone',
  y: [45.998, 78.7, 91.28, 101.99, 155.04, 136.71, 141.33, 165.8, 142.38],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(253, 195, 51)',
    width: 2
  }
};

// Create our third trace
var mac_yearly = {
  name: 'Mac',
  y: [21.783, 23.22, 21.48, 24.09, 25.47, 22.84, 25.84, 25.35, 25.74],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(115, 194, 92)',
    width: 2
  }
};

// Create our fourth trace
var services_yearly = {
  name: 'Services',
  y: [9.373, 12.89, 16.05, 18.07, 19.92, 24.36, 29.98, 38.47, 46.3],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(168, 86, 169)',
    width: 2
  }
};

// Create our fifth trace
var wearables_yearly = {
  name: 'Wearables Etc',
  y: [4.474, 10.77, 10.11, 8.39, 10.07, 11.13, 12.86, 17.39, 24.49],
  x: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  type: "scatter",
  line: {
    color: 'rgb(231, 82, 79)',
    width: 2
  }
};

// The data array consists of all traces
var data = [iphone_yearly, mac_yearly, ipad_yearly, wearables_yearly, services_yearly];

// Apply the group barmode to the layout
var layout = {
title: "All Product Segments Fiscal Year",
xaxis: { title: "Year" },
yaxis: { title: "Revenue in Billons"}
};

// Setting up the plot for quarterly numbers
Plotly.newPlot("combined_year", data, layout);

// Table for Fortune 500 Comparision
Plotly.d3.csv("csv/topfive.csv", function(err, rows){

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
  columnwidth: [310,600,1000,900,600,500,1000,1000,1000],
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

    fill: {color: ['rgba(115, 194, 92, 0.65)','rgb(255, 255, 255)', 'rgba(115, 194, 92, 0.65)','rgb(255, 255, 255)']},
    font: {family: "Arial", size: 13, color: ["black"]}
  }
}]


var layout = {
  title: "Fortune 500 Rankings"
}

Plotly.newPlot('myTable', data, layout);
});