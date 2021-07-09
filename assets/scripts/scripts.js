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
        shadow: "small", // small , medium , large
        axisPoint: "average", //broad (10%), precise (), average
      },
      barOptions: {
        spacing: "20.5px", // any form of sizing rem, em, px.
        radius: "20%", // 0 - 100%
        shadow: "", // none,  small , medium , large
        position: "flex-start", // Flex-start , flex-end , center
        barColor: "rgba(23,34,123,0.6)", // Colors - RGBA - Hex
      },
    },
    "div"
  );
});

const drawBarChart = function (data, options, element) {
  let barCount = data.length;
  let bars = createBars(data, options.barOptions, barCount);
  let graph = createChart(data, options.graphOptions);
  let axis = generateAxis(data, options.graphOptions);

  for (let item of bars) {
    $(graph).append(item);
  }

  $(".container").append(axis);
  $(".container").append(graph);
};

const createBars = function (data, options, barCount) {
  let elements = [];
  let { spacing, radius, shadow, position, barColor } = options;
  let newElement;
  let shadowDim;
  let currentBar = 0;
  let width = data.length * 10;
  let flexContainer = $(
    "<div style='display: flex; flex-direction: column; max-height: 100%;'></div>"
  );
  //Bar Styling
  let barPosition;
  let barDesign;
  let barSize;
  let barValue;
  let barLabel;

  switch (shadow) {
    case "small":
      shadowDim = "4px 4px 5px grey";
      break;
    case "medium":
      shadowDim = "6px 6px 5px grey";
      break;
    case "large":
      shadowDim = "8px 8px 5px grey";
      break;
    default:
      shadowDim = "none";
      break;
  }

  while (barCount > 0) {
    barValue = Object.values(data[currentBar]);
    barLabel = Object.keys(data[currentBar]);
    barPosition = `display: flex; justify-content: center; align-items: ${position}; margin-right: ${spacing};`;
    barSize = `height: ${barValue}px; width: ${width}px;`;
    barDesign = `box-shadow: ${shadowDim}; border-radius: ${radius}; border: 1px solid black; border-bottom: none; background-color: ${barColor}`;
    styling = barPosition + " " + barSize + " " + " " + barDesign;

    newElement = $(`<div style='${styling}'></div>`).text(barValue);
    $(flexContainer).append(newElement);
    // .append(`<span>${barLabel}</span>`);

    elements.push(flexContainer);
    newElement = "";
    flexContainer = $(
      "<div style='display: flex; flex-direction: column; max-height: 100%;'></div>"
    );
    barCount--;
    currentBar++;
  }
  return elements;
};

const createChart = function (data, options) {
  let { height, width, title, shadow } = options;

  switch (shadow) {
    case "small":
      shadowDim = "4px 4px 5px grey";
      break;
    case "medium":
      shadowDim = "6px 6px 5px grey";
      break;
    case "large":
      shadowDim = "8px 8px 5px grey";
      break;
    default:
      shadowDim = "none";
      break;
  }

  let graphPosition = `display: flex; justify-content: center; align-items: flex-end;`;
  let graphSize = `max-height: ${height}; max-width: ${width};`;
  let graphDesign = `border: 1px solid black; padding: 100px; padding-bottom: 0px; box-shadow: ${shadowDim};`;

  let styling = `${graphPosition} ${graphSize} ${graphDesign}`;
  let titleElement = $(
    "<h1 style='position: fixed; top: 1.5rem; margin-bottom: 20px;'></h1>"
  ).text(title);

  let graphContainer = $(`<div style='${styling}'></div>`).prepend(
    titleElement
  );

  return graphContainer;
};

//Helper function to generate the x and y axis

const generateAxis = function (data, options) {
  let { axisPoint } = options;
  let maxValue = 0;
  let axisPoints = [];
  let axisUnits;

  for (let obj of data) {
    if (maxValue < parseInt(Object.values(obj))) {
      maxValue = parseInt(Object.values(obj));
    }
  }

  switch (axisPoint) {
    case "broad":
      axisUnits = maxValue * 0.1;
      break;
    case "average":
      axisUnits = (maxValue + data.length) / data.length;
      break;
    case "precise":
      axisUnits = maxValue / data.length;
      break;
  }

  for (let i = 0; i < maxValue + axisUnits; i += Math.floor(axisUnits)) {
    axisPoints.push(
      $(`<span style='position:absolute; bottom: ${i}px;'></span>`).text(i)
    );
  }

  let leftAxis = $(
    `<div style='display: flex; flex-direction: column-reverse; margin-top: 10px;' ></div>`
  );

  for (let axisPoint of axisPoints) {
    $(leftAxis).append(axisPoint);
  }

  return leftAxis;
};
