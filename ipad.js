// Create our first trace
var trace1 = {
    y: [8.77, 6.26, 8.78, 7.13, 10.67, 8.75, 6.37, 6.19, 11.47, 7.61, 5.89, 5.32, 8.99, 5.43, 4.54, 4.28, 7.08, 4.41, 4.88, 4.26, 5.53, 3.89, 4.97, 4.83, 5.86, 4.01, 4.63, 4.09, 6.73, 4.87, 5.02, 4.66],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19"],
    type: "scatter",
    line: {
      color: 'rgb(248, 148, 39)',
      width: 2
    }
};

  

  // The data array consists of both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "iPad Revenue by Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot5", data, layout);



