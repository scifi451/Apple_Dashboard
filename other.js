// Create our first trace
var trace1 = {
    y: [4, 2.4, 2.29, 2.08, 3.97, 2.34, 1.91, 1.89, 2.84, 1.88, 1.77, 1.9, 2.69, 1.69, 2.64, 3.05, 4.35, 2.19, 2.22, 2.37, 4.02, 2.87, 2.74, 3.23, 5.49, 3.94, 3.73, 4.23, 7.31, 5.13, 5.53, 6.52],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19"],
    type: "scatter"
  };
  

  // The data array consists of both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "Wearables, home and accessories Revenue by Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot4", data, layout);



