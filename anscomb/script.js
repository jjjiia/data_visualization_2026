d3.csv("anscombe.csv").then(function(data) {

  // Convert strings to numbers
  data.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
  });

  // Separate the four datasets
  const dataset1 = data.filter(function(d) {
    return d.dataset === "I";
  });

  const dataset2 = data.filter(function(d) {
    return d.dataset === "II";
  });

  const dataset3 = data.filter(function(d) {
    return d.dataset === "III";
  });

  const dataset4 = data.filter(function(d) {
    return d.dataset === "IV";
  });


  // Function for drawing a scatter plot
  function drawScatterplot(dataset) {

    const width = 500;
    const height = 500;

    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const xScale = d3.scaleLinear()
      .domain([0, 20])
      .range([50, 450]);

    const yScale = d3.scaleLinear()
      .domain([0, 12])
      .range([450, 50]);

    // Draw circles
    svg.selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", function(d) {
        return xScale(d.x);
      })
      .attr("cy", function(d) {
        return yScale(d.y);
      })
      .attr("r", 5);

    // Draw axes
    svg.append("g")
      .attr("transform", "translate(0, 450)")
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .attr("transform", "translate(50, 0)")
      .call(d3.axisLeft(yScale));
  }


  // Draw all four datasets
  drawScatterplot(dataset1);

});
