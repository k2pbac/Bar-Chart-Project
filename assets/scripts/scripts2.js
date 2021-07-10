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
  let newBars = drawBars(data, options.barOptions, data.length);
  let axisPoints = generateAxis(data, options.graphOptions);

  for (let bar of newBars) {
    $(".graph").append(bar);
  }

  for (let axisPoint of axisPoints) {
    console.log(axisPoint);
    $(".y-axis").append(axisPoint);
  }
};

const drawGraph = function (data, options) {
  let { shadow, axisPoint, title } = options;
  let shadowDim;

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

  let graphStyles = `${shadowDim};`;
};

const drawBars = function (data, options, barCount) {
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

    barSize = `display: inline-block; position: absolute; bottom: 0; left: ${
      50 * barCount
    }px; max-height:100%; height: ${barValue}px; width: ${width}px;`;
    barDesign = `box-shadow: ${shadowDim}; border-radius: ${radius}; border: 1px solid black; border-bottom: none; background-color: ${barColor}`;
    styling = barSize + " " + " " + barDesign;

    newElement = $(`<div style='${styling}'></div>`).text(barValue);

    elements.push(newElement);
    newElement = "";
    barCount--;
    currentBar++;
  }
  return elements;
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
      $(
        `<div style='position: absolute; bottom: ${i}px; right: 0;'></div>`
      ).text(i)
    );
  }

  return axisPoints;
};

const generateLabels = function (data, options) {};
