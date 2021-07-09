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
      graphOptions: {},
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

  if (options.barOptions) {
    chart = createBars(data, options.barOptions, barCount);
  }

  for (let item of chart) {
    $(".here").append(item);
  }
};

const createBars = function (data, options, barCount) {
  let elements = [];
  let { spacing, radius, shadow, position, barColor } = options;
  let newElement;
  let shadowDim;
  let currentBar = 0;
  let width = data.length * 10;

  // Bar value and label
  let barValue;
  let barLabel;

  //Bar Styling
  let barPosition;
  let barDesign;
  let barSize;

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
    barLabel = Object.keys(data[currentBar]);
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
  let graphContainer = $(`<div></div>`);
};
