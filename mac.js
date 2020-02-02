// Create our first trace
var trace1 = {
    y: [23.95, 22.28, 15.82, 16.65],
    x: ["1Q12","2Q12","3Q12","4Q12"],
    type: "scatter"
  };
  

  // The data array consists of both traces
var data = [trace1];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
