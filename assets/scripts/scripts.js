$(document).ready(function () {
  drawBarChart(
    [
      { pepsi: [324, 24] },
      { coke: [42, 183] },
      { gingerale: 23 },
      { dietcoke: 344 },
      { orange: 95 },
    ], // data , can be objects label-value, or multi-value-label
    {
      graphOptions: {
        type: "multi", //Multi or Single - Stacked or regular
        size: "medium", // small, medium, large, custom (any sizing), default: medium
        title: "Pop Statistics 2021", //any String
        fontSize: "1.5rem", //any sizing
        fontColor: "rgb(23,23,12)", // any color
        axisPoint: "broad", //broad , precise , average , default: broad
      },
      barOptions: {
        fontSize: "1.1rem", //any sizing
        fontColor: [
          ["rgba(189, 195, 199, 1)", "rgba(189, 2, 199, 1)"],
          "rgba(1, 195, 199, 1)",
          "rgba(189, 2, 199, 1)",
          "rgba(189, 195, 123, 1)",
          "rgba(123, 13, 199, 1)",
        ], // any color or array of colors
        spacing: "even", // around, between, even
        radius: "0%", // 0 - 100%
        position: "bottom", // top, bottom, center , default: center,
        barColor: [
          ["rgba(189, 195, 199, 1)", "rgba(189, 2, 199, 1)"],
          ["rgba(1, 195, 199, 1)", "rgba(189, 195, 123, 1)"],
          "rgba(189, 2, 199, 1)",
          "rgba(189, 195, 123, 1)",
          "rgba(123, 13, 199, 1)",
        ], // any type of color or array of colors
      },
    },
    $(".element-test") // element to load chart into
  );
});

const drawBarChart = function (data, options, element) {
  let container = drawGraph(data, options);
  let newBars;
  let { fontColor, fontSize } = options.graphOptions;

  $(element).append(container);

  let axisPoints = drawAxis(data, options.graphOptions);

  for (let axisPoint of axisPoints) {
    $(".y-axis").append(axisPoint);
  }

  if (options.graphOptions.type === "multi") {
    newBars = drawMultiBars(data, options.barOptions, data.length);
    for (let bar of newBars) {
      $(".graph").append(bar);
    }
  } else {
    newBars = drawBars(data, options.barOptions, data.length);
    for (let bar of newBars) {
      $(".graph").append(bar);
    }
  }

  setBarSpacing(options.barOptions);
  setGridLines();
  showLegend(data, options.barOptions);
  setDimensions(options.graphOptions);

  let title = $(
    `<input style='border: none;' type='text' value='${options.graphOptions.title}'>`
  );
  $(title).css("font-size", fontSize);
  $(title).css("color", fontColor);
  $(".title").append(title);
};

const drawGraph = function (data, options) {
  let container = $("<div class='container'></div>");
  let yAxis = $("<div class='y-axis'></div>");
  let xAxis = $("<div class='x-axis'></div>");
  let graph = $("<div class='graph pattern-grid-lg bg-white'></div>");
  let bottomCorner = $("<div class='bottom-corner'></div>");
  let topCorner = $("<div class='top-corner'></div>");
  let title = $("<div class='title'></div>");
  let legendSquare = $("<div class='square'></div>");
  let legendTitle = $("<div class='label'></div>");

  container
    .append(yAxis)
    .append(xAxis)
    .append(graph)
    .append(bottomCorner)
    .append(topCorner)
    .append(title)
    .append(legendSquare)
    .append(legendTitle);

  return container;
};

// Multi bar (stacked) chart

//Regular single bar chart

const drawMultiBars = function (data, options, barCount) {
  let elements = [];
  let newElement;
  let currentBar = 0;
  let width = data.length * 10;
  let maxValue = getLargestData(data);

  //Bar Styling
  let { radius, position, barColor, fontColor, fontSize } = options;
  let barDesign;
  let barSize;
  let barValue = getDataValues(data);
  let barLabel;
  let barHeight;
  let barPosition;
  let tempColor;
  let labelColor;

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
    if (Array.isArray(Object.values(data[currentBar])[0])) {
      let stackedBar = $("<div></div>");
      let count = 0;

      for (let i = 0; i < Object.values(data[currentBar])[0].length; i++) {
        // Font color for bar
        if (Array.isArray(barColor)) {
          if (typeof barColor[currentBar] !== "undefined") {
            tempColor = barColor[currentBar][i];
          } else {
            tempColor = barColor[0];
          }
        } else {
          tempColor = barColor;
        }
        // Font color for label
        if (Array.isArray(fontColor)) {
          if (typeof fontColor[currentBar] !== "undefined") {
            labelColor = fontColor[currentBar][i];
          } else {
            labelColor = fontColor[0];
          }
        } else {
          labelColor = fontColor;
        }
        barLabel = $(
          `<h1 style='font-size: ${fontSize}; color: ${labelColor};'>${Object.keys(
            data[currentBar]
          )}</h1>`
        );

        maxValue < $(".graph").height()
          ? (barHeight = Object.values(data[currentBar])[0][i])
          : (barHeight =
              Object.values(data[currentBar])[0][i] -
              (Object.values(data[currentBar])[0][i] *
                (maxValue - $(".graph").height())) /
                maxValue);
        barPosition = `display: flex; justify-content: center; align-items: ${position};`;

        barSize = `max-height:100%; height: ${Math.floor(
          barHeight - 3
        )}px; width: ${width}px;`;
        barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
        styling = barSize + " " + barDesign + " " + barPosition;

        newElement = $(`<div style='${styling}'></div>`).text(
          Object.values(data[currentBar])[0][i]
        );
        $(stackedBar).append(newElement);
        newElement = "";
        count++;
      }
      $(".x-axis").append(barLabel);
      elements.push(stackedBar);
      stackedBar = "";
    } else {
      // Font color for bar
      if (Array.isArray(barColor)) {
        if (typeof barColor[currentBar] !== "undefined") {
          tempColor = barColor[currentBar];
        } else {
          tempColor = barColor[0];
        }
      } else {
        tempColor = barColor;
      }
      // Font color for label
      if (Array.isArray(fontColor)) {
        if (typeof fontColor[currentBar] !== "undefined") {
          labelColor = fontColor[currentBar];
        } else {
          labelColor = fontColor[0];
        }
      } else {
        labelColor = fontColor;
      }

      barLabel = $(
        `<h1 style='font-size: ${fontSize}; color: ${labelColor};'>${Object.keys(
          data[currentBar]
        )}</h1>`
      );
      maxValue < $(".graph").height()
        ? (barHeight = parseInt(barValue[currentBar]))
        : (barHeight =
            barValue[currentBar] -
            (barValue[currentBar] * (maxValue - $(".graph").height())) /
              maxValue);

      barPosition = `display: flex; justify-content: center; align-items: ${position};`;

      barSize = `max-height:100%; height: ${Math.floor(
        barHeight - 3
      )}px; width: ${width}px;`;
      barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
      styling = barSize + " " + barDesign + " " + barPosition;

      newElement = $(`<div style='${styling}'></div>`).text(
        barValue[currentBar]
      );

      $(".x-axis").append(barLabel);
      elements.push(newElement);
    }
    newElement = "";
    barCount--;
    currentBar++;
  }
  return elements;
};

//Regular single bar chart

const drawBars = function (data, options, barCount) {
  let elements = [];
  let newElement;
  let currentBar = 0;
  let width = data.length * 10;
  let maxValue = getLargestData(data);

  //Bar Styling
  let { radius, position, barColor, fontColor, fontSize } = options;
  let barDesign;
  let barSize;
  let barValue = getDataValues(data);
  let barLabel;
  let barHeight;
  let barPosition;
  let tempColor;
  let labelColor;

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
    // Font color for bar
    if (Array.isArray(barColor)) {
      if (typeof barColor[currentBar] !== "undefined") {
        tempColor = barColor[currentBar];
      } else {
        tempColor = barColor[0];
      }
    } else {
      tempColor = barColor;
    }
    // Font color for label
    if (Array.isArray(fontColor)) {
      if (typeof fontColor[currentBar] !== "undefined") {
        labelColor = fontColor[currentBar];
      } else {
        labelColor = fontColor[0];
      }
    } else {
      labelColor = fontColor;
    }

    barLabel = $(
      `<h1 style='font-size: ${fontSize}; color: ${labelColor};'>${Object.keys(
        data[currentBar]
      )}</h1>`
    );
    maxValue < $(".graph").height()
      ? (barHeight = parseInt(barValue[currentBar]))
      : (barHeight =
          barValue[currentBar] -
          (barValue[currentBar] * (maxValue - $(".graph").height())) /
            maxValue);

    barPosition = `display: flex; justify-content: center; align-items: ${position};`;

    barSize = `max-height:100%; height: ${Math.floor(
      barHeight - 3
    )}px; width: ${width}px;`;
    barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
    styling = barSize + " " + barDesign + " " + barPosition;

    newElement = $(`<div style='${styling}'></div>`).text(barValue[currentBar]);

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
        ? (axisUnits = Math.floor(
            maxValue * 0.15 + (maxValue - $(".y-axis").height()) / data.length
          ))
        : (axisUnits = Math.floor(maxValue * 0.15));
      break;
    case "average":
      const sum = dataValues.reduce((a, b) => a + b, 0);
      const avg = sum / data.length || 0;
      $(".y-axis").height() < maxValue
        ? (axisUnits = Math.floor(
            avg / data.length +
              Math.floor(avg - $(".y-axis").height()) / data.length
          ))
        : (axisUnits = avg / data.length);
      break;
    case "broad":
      $(".y-axis").height() < maxValue
        ? (axisUnits =
            Math.floor(maxValue / data.length) +
            Math.floor(maxValue - $(".y-axis").height()) / data.length)
        : (axisUnits = maxValue / data.length);
      break;
  }

  for (let i = 0; i <= maxValue; i += axisUnits) {
    maxValue > $(".y-axis").height()
      ? (axisHeight = i - (i * (maxValue - $(".graph").height())) / maxValue)
      : (axisHeight = i);
    axisPoints.push(
      $(
        `<div style='position: absolute; bottom: 0; left:0; max-height:100%; height: ${
          i !== 0 ? Math.floor(axisHeight) : ""
        }px;'></div>`
      ).text(Math.floor(i))
    );
  }
  return axisPoints;
};

const getLargestData = function (data) {
  let maxValue = 0;

  for (let obj of data) {
    if (Object.values(obj)[0]) {
      console.log(Object.values(obj)[0]);
    }
    if (maxValue < parseInt(Object.values(obj))) {
      maxValue = parseInt(Object.values(obj));
    }
  }

  return maxValue;
};

const getDataValues = function (data) {
  let dataValues = [];

  for (let i = 0; i < data.length; i++) {
    if (typeof Object.values(data[i])[0].length !== "undefined") {
      for (let el of Object.values(data[i])) {
        dataValues.push(el);
      }
    } else {
      dataValues.push(parseInt(Object.values(data[i])));
    }
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

const setGridLines = function () {
  let gridLine = $("<hr>");

  // $(".graph").append(gridLine);
};

const setDimensions = function (options) {
  let { size } = options;
  let height;
  let width;
  if (typeof size !== "object") {
    switch (size) {
      case "small":
        height = "400px";
        width = "500px";
        break;
      case "medium":
        height = "500px";
        width = "550px";
        break;
      case "large":
        height = "550px";
        width = "600px";
        break;
      default:
        height = "500px";
        width = "550px";
        break;
    }
  } else {
    height = size.height;
    width = size.width;
  }

  $(".container").css("width", width);
  $(".container").css("height", height);
};

const showLegend = function (data, options) {
  let { barColor } = options;
  let title = $("<h2>Legend</h2>");
  let barLabel;
  let barSquare;
  let tempColor;

  $(".legend-title").append(title);

  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(barColor)) {
      if (typeof barColor[i] !== "undefined") {
        tempColor = barColor[i];
      } else {
        tempColor = barColor[0];
      }
    } else {
      tempColor = barColor;
    }
    barLabel = $(
      `<div style='margin-bottom: 5px; font-size: 1.2rem; padding-left: 4px;'>${Object.keys(
        data[i]
      )}</div>`
    );
    barSquare = $(
      `<div style='margin-bottom: 7px;height: 1.3rem; width: 1.3rem; border-radius: 25%; background-color: ${tempColor}'></div>`
    );
    $(".square").append(barSquare);
    $(".label").append(barLabel);
  }
};
