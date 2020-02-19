// Create our first trace
var trace1 = {
    y: [6.6, 5.07, 4.93, 6.62, 5.52, 5.45, 4.89, 5.62, 6.4, 5.52, 5.54, 6.63, 6.94, 5.62, 6.03, 6.88, 6.75, 5.11, 5.24, 5.74, 7.24, 5.84, 5.59, 7.17, 6.9, 5.78, 5.26, 7.41, 7.42, 5.51, 5.82, 6.99, 7.19],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19", "1Q '20"],
    type: "scatter",
    line: {
      color: 'rgb(115, 194, 92)',
      width: 2
    }
};

  // The data array consists of both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "Mac Revenue by Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("mac", data, layout);



