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
        axisPoint: "broad", //broad (10%), precise (), average
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
  let maxValue = getLargestData(data);

  //Bar Styling
  let barPosition;
  let barDesign;
  let barSize;
  let barValue;
  let barLabel;
  let barHeight;

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
    if (currentBar % 2 == 0) {
      barLabel = $(
        `<div style='font-size: 1.2rem; position: absolute; display: inline-block; left: ${
          barCount * 50
        }px;'>${Object.keys(data[currentBar])}</div>`
      );
    } else {
      barLabel = $(
        `<div style='margin-top: 20px; font-size: 1.2rem; position: absolute; display: inline-block; left: ${
          barCount * 50
        }px;'>${Object.keys(data[currentBar])}</div>`
      );
    }

    maxValue < $(".y-axis").height()
      ? (barHeight = barValue)
      : (barHeight = barValue * (1 - (maxValue / $(".y-axis").height() - 1)));

    barSize = `display: inline-block; position: absolute; bottom: 0; left: ${
      50 * barCount
    }px; max-height:100%; height: ${barHeight}px; width: ${width}px;`;
    barDesign = `box-shadow: ${shadowDim}; border-radius: ${radius}; border: 1px solid black; border-bottom: none; background-color: ${barColor}`;
    styling = barSize + " " + " " + barDesign;

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

const generateAxis = function (data, options) {
  let { axisPoint } = options;
  let maxValue = getLargestData(data);
  let axisPoints = [];
  let axisUnits;
  let axisHeight;

  switch (axisPoint) {
    case "precise":
      if (maxValue > maxValue * 0.1 * data.length) {
        axisUnits = maxValue * 0.1 + (maxValue - maxValue * 0.1 * data.length);
      } else {
        axisUnits = maxValue * 0.1;
      }
      break;
    case "average":
      axisUnits = (maxValue + data.length) / data.length;
      break;
    case "broad":
      $(".y-axis").height() < maxValue
        ? (axisUnits =
            Math.ceil(maxValue / data.length) +
            Math.ceil(maxValue - $(".y-axis").height()) / data.length)
        : (axisUnits = maxValue / data.length);
      break;
  }

  for (let i = 0; i <= maxValue; i += Math.floor(maxValue / data.length)) {
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
