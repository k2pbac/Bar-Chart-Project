$(document).ready(function () {
  drawBarChart(
    [{ iPhone_11: 18 }, { galaxy_note_20: 149 }, { sonim_XP5S: 82 }],
    {
      graphOptions: {
        type: "single", //Multi or Single - Stacked or regular
        size: "small", // small, medium, large, custom (any sizing), default: medium
        title: "Phone Sales 2020", //any String
        fontSize: "1.5rem", //any sizing
        fontColor: "rgb(23,23,12)", // any color
        axisPoint: "average", //broad , precise , average , default: broad
        yLabel: "Sales",
        yLabelFontSize: "1.2rem",
        xLabel: "Products",
        xLabelFontSize: "1.2rem",
        yMeasurement: " (in millions)",
        gridLines: false, // true or false for showing gridlines
      },
      barOptions: {
        fontSize: "1.1rem", //any sizing
        fontColor: [
          ["rgba(135, 211, 124, 1)"],
          ["rgba(102, 51, 153, 1)"],
          ["rgba(0, 181, 204, 1)"],
          ["rgba(219, 10, 91, 1)"],
          ["rgba(255, 203, 5, 1)"],
          ["rgba(189, 195, 199, 1)"],
        ], // any color or array of colors
        spacing: "even", // around, between, even
        radius: "0%", // 0 - 100%
        position: "bottom", // top, bottom, center , default: center,
        // any type of color or array of colors
        barColor: [
          ["rgba(135, 211, 124, 1)"],
          ["rgba(102, 51, 153, 1)"],
          ["rgba(0, 181, 204, 1)"],
          ["rgba(219, 10, 91, 1)"],
          ["rgba(255, 203, 5, 1)"],
          ["rgba(189, 195, 199, 1)"],
        ],
      },
    },
    $(".element-test3")
  );
  drawBarChart(
    [
      { iPhone_11: 189 },
      { galaxy_note_20: 149 },
      { sonim_XP5S: 82 },
      { huawei_p30_pro: 120 },
      { blackberry_KEYone: 65 },
      { xperia_pro: 73 },
      { pixel_5: 130 },
    ],
    {
      graphOptions: {
        type: "single", //Multi or Single - Stacked or regular
        size: { width: "950px", height: "500px" }, // small, medium, large, custom (any sizing), default: medium
        title: "Phone Sales 2020", //any String
        fontSize: "1.5rem", //any sizing
        fontColor: "rgb(23,23,12)", // any color
        axisPoint: "average", //broad , precise , average , default: broad
        yLabel: "Sales",
        yLabelFontSize: "1.2rem",
        xLabel: "Products",
        xLabelFontSize: "1.2rem",
        yMeasurement: " (in millions)",
        gridLines: true, // true or false for showing gridlines
      },
      barOptions: {
        fontSize: "1.1rem", //any sizing
        fontColor: [
          ["rgba(135, 211, 124, 1)"],
          ["rgba(102, 51, 153, 1)"],
          ["rgba(0, 181, 204, 1)"],
          ["rgba(219, 10, 91, 1)"],
          ["rgba(255, 203, 5, 1)"],
          ["rgba(189, 195, 199, 1)"],
        ], // any color or array of colors
        spacing: "even", // around, between, even
        radius: "0%", // 0 - 100%
        position: "bottom", // top, bottom, center , default: center,
        // any type of color or array of colors
        barColor: [
          ["rgba(135, 211, 124, 1)"],
          ["rgba(102, 51, 153, 1)"],
          ["rgba(0, 181, 204, 1)"],
          ["rgba(219, 10, 91, 1)"],
          ["rgba(255, 203, 5, 1)"],
          ["rgba(189, 195, 199, 1)"],
        ],
      },
    },
    $(".element-test2")
  );
  drawBarChart(
    [
      { pepsi: [{ may: 324 }, { June: 24 }] },
      { coke: [{ September: 42 }, { March: 183 }] },
      { ginger_ale: [{ April: 43 }] },
      { diet_coke: [{ July: 344 }] },
      { orange: [{ December: 95 }] },
    ], // data , can be objects label-value, or multi-value-label
    {
      graphOptions: {
        type: "multi", //Multi or Single - Stacked or regular
        size: "medium", // small, medium, large, custom (any sizing), default: medium
        title: "Pop Sales 2021", //any String
        fontSize: "1.5rem", //any sizing
        fontColor: "rgb(23,23,12)", // any color
        axisPoint: "broad", //broad , precise , average , default: broad
        yLabel: "Sales",
        yLabelFontSize: "1.2rem",
        xLabel: "Products",
        xLabelFontSize: "1.2rem",
        yMeasurement: " (in millions)",
        gridLines: true, // true or false for showing gridlines
      },
      barOptions: {
        fontSize: "1.1rem", //any sizing
        fontColor: [
          ["rgba(189, 195, 199, 1)", "rgba(189, 2, 199, 1)"],
          ["rgba(1, 195, 199, 1)"],
          ["rgba(242, 120, 75, 1)"],
          ["rgb(4, 147, 114)"],
          ["rgba(123, 13, 199, 1)"],
        ], // any color or array of colors
        spacing: "even", // around, between, even
        radius: "0%", // 0 - 100%
        position: "bottom", // top, bottom, center , default: center,
        barColor: [
          ["rgba(189, 195, 199, 1)", "rgba(189, 2, 199, 1)"],
          ["rgba(1, 195, 199, 1)", "rgba(189, 195, 123, 1)"],
          ["rgba(242, 120, 75, 1)"],
          ["rgb(4, 147, 114)"],
          ["rgba(123, 13, 199, 1)"],
        ], // any type of color or array of colors
      },
    },
    $(".element-test") // element to load chart into
  );
});

const drawBarChart = function (data, options, element) {
  let container = drawGraph(data, options);
  let { height, width } = getDimensions(options.graphOptions);

  $(container).css("width", width);
  $(container).css("height", height);
  $(element).append(container);
};

const getElements = function (data, options) {
  let {
    xLabelFontSize,
    xLabel,
    yLabel,
    yLabelFontSize,
    yMeasurement,
    gridLines,
  } = options.graphOptions;
  let spacing = setBarSpacing(options.barOptions);
  let { fontColor, fontSize } = options.graphOptions;
  let elements = {};
  let yAxis = $("<div class='y-axis'></div>");
  let xAxis = $("<div class='x-axis'></div>");
  let graph = $(
    `<div class='graph ${
      gridLines ? " pattern-grid-lg " : " "
    } bg-white'></div>`
  );
  let bottomCorner = $("<div class='bottom-corner'></div>");
  let topCorner = $("<div class='top-corner'></div>");
  let title = $("<div class='title'></div>");
  let legendSquare = $("<div class='square'></div>");
  let legendTitle = $("<div class='label'></div>");
  let yAxisLabel = $("<div class='yLabel'></div>");
  let yLabelElement = $(
    `<span style='white-space: nowrap; transform: rotate(-90deg);'>${yLabel}${yMeasurement}</span>`
  );
  let xAxisLabel = $("<div  class='xLabel'</div>");
  let xLabelElement = $(`<p>${xLabel}</p>`);
  let titleValue = $(
    `<input style='border: none;' type='text' value='${options.graphOptions.title}'>`
  );

  $(graph).css("justify-content", spacing);
  $(xAxis).css("justify-content", spacing);

  $(titleValue).css("font-size", fontSize);
  $(titleValue).css("color", fontColor);
  $(title).append(titleValue);

  $(xLabelElement).css("font-size", xLabelFontSize);
  $(yLabelElement).css("font-size", yLabelFontSize);

  $(xAxisLabel).append(xLabelElement);
  $(yAxisLabel).append(yLabelElement);
  elements.yAxis = yAxis;
  elements.xAxis = xAxis;
  elements.graph = graph;
  elements.bottomCorner = bottomCorner;
  elements.topCorner = topCorner;
  elements.title = title;
  elements.legendSquare = legendSquare;
  elements.yAxisLabel = yAxisLabel;
  elements.xAxisLabel = xAxisLabel;
  elements.legendTitle = legendTitle;

  return elements;
};

const drawGraph = function (data, options) {
  let container = $("<div class='container'></div>");
  let elements = getElements(data, options);
  let newLegend = showLegend(data, options);
  let newBars;
  let axisPoints = drawAxis(data, options.graphOptions);

  for (let axisPoint of axisPoints) {
    $(elements.yAxis).append(axisPoint);
  }

  if (options.graphOptions.type === "multi") {
    newBars = drawMultiBars(data, options, data.length);
    for (let i = 0; i < data.length; i++) {
      $(elements.graph).append(Object.values(newBars)[0][i]);
      $(elements.xAxis).append(Object.values(newBars)[1][i]);
    }
  } else {
    newBars = drawBars(data, options, data.length);
    for (let i = 0; i < data.length; i++) {
      $(elements.graph).append(Object.values(newBars)[0][i]);
      $(elements.xAxis).append(Object.values(newBars)[1][i]);
    }
  }

  for (let x = 0; x < newLegend.squares.length; x++) {
    $(elements.legendSquare).append(Object.values(newLegend)[0][x]);
    $(elements.legendTitle).append(Object.values(newLegend)[1][x]);
  }

  for (let y = 0; y < Object.values(elements).length; y++) {
    $(container).append(Object.values(elements)[y]);
  }

  return container;
};

// Multi bar (stacked) chart

const drawMultiBars = function (data, options, barCount) {
  let { height } = getDimensions(options.graphOptions);
  let elements = [];
  let labels = [];
  let newElement;
  let currentBar = 0;
  let maxValue = getMultiLargestData(data);
  //Bar Styling
  let { radius, position, barColor, fontColor, fontSize } = options.barOptions;
  let barDesign;
  let barSize;
  let barValue = getMultiDataValues(data);
  let newCount = showLegend(data, options);
  let barWidth = newCount.count * 8;
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
            if (
              Array.isArray(fontColor[currentBar]) &&
              fontColor[currentBar].length > 1
            ) {
              labelColor = fontColor[currentBar][i];
            } else {
              labelColor = fontColor[currentBar];
            }
          } else {
            labelColor = fontColor[0];
          }
        } else {
          labelColor = fontColor;
        }
        barLabel = $(
          `<p style='padding-top: 10px; padding-right: 10px; transform: rotate(-45deg); max-width: ${barWidth}px; min-width: ${barWidth}px; font-size: ${fontSize}; color: ${labelColor};'>${applyPascalTitle(
            Object.keys(data[currentBar]) + ""
          )}</p>`
        );

        maxValue < height - 120
          ? (barHeight = Object.values(Object.values(data[currentBar])[0][i]))
          : (barHeight =
              Object.values(Object.values(data[currentBar])[0][i]) -
              (Object.values(Object.values(data[currentBar])[0][i]) *
                (maxValue - (height - 120))) /
                maxValue);
        barPosition = `display: flex; justify-content: center; align-items: ${position};`;

        barSize = `max-height:100%; height: ${Math.floor(
          barHeight - 3
        )}px; width: ${barWidth}px;`;
        barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
        styling = barSize + " " + barDesign + " " + barPosition;

        newElement = $(`<div style='${styling}'></div>`).text(
          Object.values(Object.values(data[currentBar])[0][i])
        );
        $(stackedBar).append(newElement);
        newElement = "";
      }
      labels.push(barLabel);
      elements.push(stackedBar);
      barLabel = "";
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
        `<p style='padding-top: 10px; padding-right: 10px; transform: rotate(-45deg); max-width: ${barWidth}px; min-width: ${barWidth}px;  font-size: ${fontSize}; color: ${labelColor};'>${applyPascalTitle(
          Object.keys(data[currentBar]) + ""
        )}</p>`
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
      )}px; width: ${barWidth}px;`;
      barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
      styling = barSize + " " + barDesign + " " + barPosition;

      newElement = $(`<div class="bar" style='${styling}'></div>`).text(
        barValue[currentBar]
      );

      $(".x-axis").append(barLabel);
      labels.push(barLabel);
      elements.push(newElement);
      barLabel = "";
      newElement = "";
    }
    newElement = "";
    barCount--;
    currentBar++;
  }
  return { elements: elements, labels: labels };
};

//Regular single bar chart

const drawBars = function (data, options, barCount) {
  let elements = [];
  let labels = [];
  let { height } = getDimensions(options.graphOptions);
  let newElement;
  let currentBar = 0;
  let width = data.length * 8;
  let maxValue = getLargestData(data);

  //Bar Styling
  let { radius, position, barColor, fontColor, fontSize } = options.barOptions;
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
        labelColor = fontColor[currentBar][0];
      } else {
        labelColor = fontColor[0];
      }
    } else {
      labelColor = fontColor;
    }

    barLabel = $(
      `<p style='padding-top: 10px; padding-right: 10px; transform: rotate(-45deg); max-width: ${width}px; min-width: ${width}px; font-size: ${fontSize}; color: ${labelColor};'>${applyPascalTitle(
        Object.keys(data[currentBar]) + ""
      )}</p>`
    );
    maxValue < height - 120
      ? (barHeight = parseInt(barValue[currentBar]))
      : (barHeight =
          barValue[currentBar] -
          (barValue[currentBar] * (maxValue - (height - 120))) / maxValue);

    barPosition = `display: flex; justify-content: center; align-items: ${position};`;

    barSize = `max-height:100%; height: ${Math.floor(
      barHeight - 3
    )}px; width: ${width}px;`;
    barDesign = `box-shadow: 0 0 8px 0px #000; clip-path: inset(0px -15px 0px -15px);border-radius: ${radius}; border-bottom: none; background-color: ${tempColor};`;
    styling = barSize + " " + barDesign + " " + barPosition;

    newElement = $(`<div class="bar" style='${styling}'></div>`).text(
      barValue[currentBar]
    );

    labels.push(barLabel);
    elements.push(newElement);

    newElement = "";
    barLabel = "";
    barCount--;
    currentBar++;
  }
  return { elements: elements, labels: labels };
};

//Helper function to generate the x and y axis

const drawAxis = function (data, options) {
  let { axisPoint, type } = options;
  let { height } = getDimensions(options);
  let maxValue;
  let dataValues;
  switch (type) {
    case "multi":
      maxValue = getMultiLargestData(data);
      dataValues = getMultiDataValues(data);
      break;
    case "single":
      maxValue = getLargestData(data);
      dataValues = getDataValues(data);
  }

  let axisPoints = [];
  let axisUnits;
  let axisHeight;

  switch (axisPoint) {
    case "precise":
      height - 120 < maxValue
        ? (axisUnits = Math.floor(
            maxValue * 0.15 + (maxValue - (height - 120)) / data.length
          ))
        : (axisUnits = Math.floor(maxValue * 0.15));
      break;
    case "average":
      const sum = dataValues.reduce((a, b) => a + b, 0);
      const avg = sum / data.length || 0;
      axisUnits = avg;
      break;
    case "broad":
      height - 120 < maxValue
        ? (axisUnits =
            Math.floor(maxValue / data.length) +
            Math.floor(maxValue - (height - 120)) / data.length)
        : (axisUnits = maxValue / data.length);
      break;
  }
  let tempHeight =
    height - 120 > maxValue ? height - 120 : maxValue + axisUnits;
  for (let i = 0; i <= tempHeight; i += axisUnits) {
    maxValue > height - 120
      ? (axisHeight = i - (i * (maxValue - (height - 120))) / maxValue)
      : (axisHeight = i);
    axisPoints.push(
      $(
        `<div style='position: absolute; bottom: 0; left:0; max-height:100%; height: ${
          i !== 0 ? Math.floor(axisHeight) : "0"
        }px;'></div>`
      ).text(Math.floor(i))
    );
  }
  return axisPoints;
};

const getMultiLargestData = function (data) {
  let maxValue = 0;
  let tempMax = 0;
  for (let obj of data) {
    if (Object.values(obj)[0].length) {
      for (let i = 0; i < Object.values(obj)[0].length; i++) {
        maxValue += parseInt(Object.values(Object.values(obj)[0][i]));
      }
      if (tempMax < maxValue) {
        tempMax = maxValue;
      }
    }
    maxValue = 0;
  }
  return tempMax;
};

const getMultiDataValues = function (data) {
  let dataValues = [];

  for (let i = 0; i < data.length; i++) {
    if (typeof Object.values(data[i])[0].length !== "undefined") {
      for (let x = 0; x < Object.values(data[i])[0].length; x++) {
        dataValues.push(parseInt(Object.values(Object.values(data[i])[0][x])));
      }
    } else {
      dataValues.push(parseInt(Object.values(data[i])));
    }
  }
  return dataValues;
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

  return spacing;
};

const getDimensions = function (options) {
  let { size } = options;
  let height;
  let width;
  if (typeof size !== "object") {
    switch (size) {
      case "small":
        height = 400;
        width = 500;
        break;
      case "medium":
        height = 500;
        width = 550;
        break;
      case "large":
        height = 550;
        width = 600;
        break;
      default:
        height = 500;
        width = 550;
        break;
    }
  } else {
    height = parseInt(size.height.slice(0, -2));
    width = parseInt(size.width.slice(0, -2));
  }

  return { height: height, width: width };
};

const showLegend = function (data, options) {
  let { barColor } = options.barOptions;
  let { type } = options.graphOptions;
  let barLabel;
  let count = 0;
  let barSquare;
  let tempColor;
  let legendLabel = [];
  let legendColors = [];
  let tempLabel;
  let squares = [];
  let labels = [];

  if (type === "multi") {
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(barColor[i])) {
        count++;
        for (let x = 0; x < barColor[i].length; x++) {
          if (
            Object.keys(Object.values(data[i])[0][x]) &&
            !legendLabel.includes(
              Object.keys(Object.values(data[i])[0][x]) + ""
            )
          ) {
            tempLabel = applyPascalTitle(
              Object.keys(Object.values(data[i])[0][x]) + ""
            );
            tempColor = barColor[i][x];
            legendLabel.push(tempLabel);
            legendColors.push(tempColor);
            barLabel = $(
              `<div style='margin-bottom: 5px; font-size: 1.2rem; padding-left: 4px;'>${tempLabel}</div>`
            );
            barSquare = $(
              `<div style='margin-bottom: 7px;height: 1.3rem; width: 1.3rem; border-radius: 25%; background-color: ${tempColor}'></div>`
            );

            squares.push(barSquare);
            labels.push(barLabel);
          } else {
            tempLabel = legendLabel[legendLabel.indexOf(tempLabel)];
            tempColor = legendColors[legendLabel.indexOf(tempColor)];
          }
          barLabel = "";
          barSquare = "";
          tempColor = "";
          tempLabel = "";
        }
      }
    }
  } else {
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
        `<div style='margin-bottom: 5px; font-size: 1.2rem; padding-left: 4px;'>${applyPascalTitle(
          Object.keys(data[i]) + ""
        )}</div>`
      );
      barSquare = $(
        `<div style='margin-bottom: 7px;height: 1.3rem; width: 1.3rem; border-radius: 25%; background-color: ${tempColor}'></div>`
      );
      squares.push(barSquare);
      labels.push(barLabel);
    }
  }
  return { squares: squares, labels: labels, count: count };
};

//Format Labels for X axis and Legend
const applyCamel = function (string) {
  let newString = "";
  let camel = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "_") {
      camel = true;
      newString += " ";
    } else if (camel == true) {
      newString += string[i].toUpperCase();
      camel = false;
    } else {
      newString += string[i];
    }
  }
  return newString;
};

const applyPascalTitle = function (string) {
  return string[0].toUpperCase() + applyCamel(string.slice(1, string.length));
};
