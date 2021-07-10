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
        title: "Pop Statistics 2021", //any String
        fontSize: "1.5rem", //any sizing
        fontColor: "rgb(23,23,12)", // any color
        axisPoint: "broad", //broad (10%), precise (), average
      },
      barOptions: {
        spacing: "even", // around, between, even
        radius: "20%", // 0 - 100%
        position: "bottom", // top, bottom, center , default: center
        barColor: "rgba(23,234,13,0.6)", // Colors - RGBA - Hex
      },
    },
    $(".element-test")
  );
});

const drawBarChart = function (data, options, element) {
  let container = drawGraph(data, options);
  let { fontColor, fontSize } = options.graphOptions;

  $(element).append(container);
  let axisPoints = drawAxis(data, options.graphOptions);

  for (let axisPoint of axisPoints) {
    $(".y-axis").append(axisPoint);
  }

  let newBars = drawBars(data, options.barOptions, data.length);

  for (let bar of newBars) {
    $(".graph").append(bar);
  }

  setBarSpacing(options.barOptions);

  let title = $("<h2></h2>").text(options.graphOptions.title);
  $(title).css("font-size", fontSize);
  $(title).css("color", fontColor);

  $(".title").append(title);
};

const drawGraph = function (data, options) {
  let container = $("<div class='container'></div>");
  let yAxis = $("<div class='y-axis'></div>");
  let xAxis = $("<div class='x-axis'></div>");
  let graph = $("<div class='graph'></div>");
  let bottomCorner = $("<div class='bottom-corner'></div>");
  let topCorner = $("<div class='top-corner'></div>");
  let title = $("<div class='title'></div>");

  container
    .append(yAxis)
    .append(xAxis)
    .append(graph)
    .append(bottomCorner)
    .append(topCorner)
    .append(title);

  return container;
};

const drawBars = function (data, options, barCount) {
  let elements = [];
  let newElement;
  let currentBar = 0;
  let width = data.length * 10;
  let maxValue = getLargestData(data);

  //Bar Styling
  let { radius, position, barColor } = options;
  let barDesign;
  let barSize;
  let barValue;
  let barLabel;
  let barHeight;
  let barPosition;

  switch (position) {
    case "top":
      position = "flex-start";
      break;
    case "center":
      position = "center";
      break;
    case "bottom":
      position = "flex-end";
      break;
    default:
      position = "center";
  }

  while (barCount > 0) {
    barValue = Object.values(data[currentBar]);

    barLabel = $(
      `<h1 style='font-size: 1.2rem;'>${Object.keys(data[currentBar])}</h1>`
    );

    maxValue < $(".y-axis").height()
      ? (barHeight = barValue)
      : (barHeight = barValue * (1 - (maxValue / $(".y-axis").height() - 1)));

    barPosition = `display: flex; justify-content: center; align-items: ${position};`;

    barSize = `max-height:100%; height: ${barHeight}px; width: ${width}px;`;
    barDesign = `border-radius: ${radius}; border: 1px solid black; border-bottom: none; background-color: ${barColor};`;
    styling = barSize + " " + barDesign + " " + barPosition;

    newElement = $(`<div style='${styling}'></div>`).text(barValue);

    $(".x-axis").append(barLabel);
    elements.push(newElement);
    newElement = "";
    barCount--;
    currentBar++;
  }
  return elements;
};

//Helper function to generate the x and y axis

const drawAxis = function (data, options) {
  let { axisPoint } = options;
  let maxValue = getLargestData(data);
  let axisPoints = [];
  let axisUnits;
  let axisHeight;
  let dataValues = getDataValues(data);

  switch (axisPoint) {
    case "precise":
      $(".y-axis").height() < maxValue
        ? (axisUnits = Math.ceil(
            maxValue * 0.15 + (maxValue - $(".y-axis").height()) / data.length
          ))
        : (axisUnits = Math.ceil(maxValue * 0.15));
      break;
    case "average":
      const sum = dataValues.reduce((a, b) => a + b, 0);
      const avg = sum / data.length || 0;
      $(".y-axis").height() < maxValue
        ? (axisUnits = Math.ceil(
            avg / data.length +
              Math.ceil(avg - $(".y-axis").height()) / data.length
          ))
        : (axisUnits = avg / data.length);
      break;
    case "broad":
      $(".y-axis").height() < maxValue
        ? (axisUnits =
            Math.ceil(maxValue / data.length) +
            Math.ceil(maxValue - $(".y-axis").height()) / data.length)
        : (axisUnits = maxValue / data.length);
      break;
  }

  for (let i = 0; i <= maxValue + axisUnits; i += axisUnits) {
    maxValue > $(".y-axis").height()
      ? (axisHeight = i * (1 - (maxValue / $(".y-axis").height() - 1)))
      : (axisHeight = i);
    axisPoints.push(
      $(
        `<div style='position: absolute; max-height:100%; height: ${axisHeight}px; bottom:0; right: 0;'></div>`
      ).text(i)
    );
  }

  return axisPoints;
};

const getLargestData = function (data) {
  let maxValue = 0;
  for (let obj of data) {
    if (maxValue < parseInt(Object.values(obj))) {
      maxValue = parseInt(Object.values(obj));
    }
  }

  return maxValue;
};

const getDataValues = function (data) {
  let dataValues = [];

  for (let i = 0; i < data.length; i++) {
    dataValues.push(parseInt(Object.values(data[i])));
  }
  return dataValues;
};

const setBarSpacing = function (options) {
  let { spacing } = options || "between";

  switch (spacing) {
    case "between":
      spacing = "space-between";
      break;
    case "even":
      spacing = "space-evenly";
      break;
    case "around":
      spacing = "space-around";
      break;
  }

  $(".container > .graph").css("justify-content", spacing);
  $(".container > .x-axis").css("justify-content", spacing);
};
