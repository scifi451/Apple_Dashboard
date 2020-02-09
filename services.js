// Create our first trace
var services = {
    y: [3.02, 3.17, 3.2, 3.5, 3.69, 4.11, 3.99, 4.26, 4.4, 4.57, 4.49, 4.61, 4.8, 5, 5.03, 5.09, 6.06, 5.99, 5.98, 6.33, 7.17, 7.04, 7.27, 8.5, 8.47, 9.85, 10.17, 9.98, 10.88, 11.45, 11.46, 12.51],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19"],
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
  title: "Services",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("services", data, layout);



