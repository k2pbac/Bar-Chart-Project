$(document).ready(function () {
  drawBarChart(
    [
      { pepsi: 324 },
      { coke: 203 },
      { gingerale: 23 },
      { dietcoke: 344 },
      { orange: 95 },
    ],
    {
      graphOptions: {
        height: "400px",
        width: "400px",
        title: "Pop Statistics 2021",
        shadow: "medium", // small , medium , large
      },
      barOptions: {
        spacing: "20.5px", // any form of sizing rem, em, px.
        radius: "20%", // 0 - 100%
        shadow: "medium", // small , medium , large
        position: "flex-start", // Flex-start , flex-end , center
        barColor: "rgba(23,34,123,0.6)", // Colors - RGBA - Hex
      },
    },
    "div"
  );
});

const drawBarChart = function (data, options, element) {
  let chart;
  let barCount = data.length;
  let graph = createChart(data, options.graphOptions);
  if (options.barOptions) {
    bars = createBars(data, options.barOptions, barCount);
  }

  for (let item of bars) {
    $(graph).append(item);
  }

  $(".here").append(graph);
};

const createBars = function (data, options, barCount) {
  let elements = [];
  let { spacing, radius, shadow, position, barColor } = options;
  let newElement;
  let shadowDim;
  let currentBar = 0;
  let width = data.length * 10;

  //Bar Styling
  let barPosition;
  let barDesign;
  let barSize;
  let barValue;

  switch (shadow) {
    case "small":
      shadowDim = "4px 4px 5px grey";
      break;
    case "medium":
      shadowDim = "6px 6px 5px grey";
      break;
    case "large":
      shadowDim = "8px 8px 5px grey";
  }

  while (barCount > 0) {
    barValue = Object.values(data[currentBar]);
    barPosition = `display: flex; justify-content: center; align-items: ${position}; margin-right: ${spacing};`;
    barSize = `height: ${barValue}px; width: ${width}px;`;
    barDesign = `box-shadow: ${shadowDim}; border-radius: ${radius}; border: 1px solid black; background-color: ${barColor}`;
    styling = barPosition + " " + barSize + " " + " " + barDesign;

    newElement = $(`<div style='${styling}'></div>`).text(barValue);

    elements.push(newElement);
    newElement = "";
    barCount--;
    currentBar++;
  }
  return elements;
};

const createChart = function (data, options) {
  let { height, width, title, shadow } = options;
  let maxValue = 0;
  for (let obj of data) {
    if (maxValue < Object.values(obj)) {
    }
  }

  console.log(maxData);
  switch (shadow) {
    case "small":
      shadowDim = "4px 4px 5px grey";
      break;
    case "medium":
      shadowDim = "6px 6px 5px grey";
      break;
    case "large":
      shadowDim = "8px 8px 5px grey";
  }

  let graphPosition = `display: flex; justify-content: center; margin: auto; align-items: flex-end;`;
  let graphSize = `height: ${height}; width: ${width};`;
  let graphDesign = `border: 1px solid black; padding: 55px; padding-bottom: 10px; box-shadow: ${shadowDim};`;

  let styling = `${graphPosition} ${graphSize} ${graphDesign}`;
  let titleElement = $("<h1 style='position: fixed; top: 2rem;'></h1>").text(
    title
  );

  let leftAxis = $(
    "<div style='display: flex-column; position:relative; bottom: 0; left: -10%;' ></div>"
  ).text("axis here");
  let bottomAxis = $();

  let graphContainer = $(`<div style='${styling}'></div>`)
    .prepend(leftAxis)
    .prepend(titleElement);

  return graphContainer;
};
