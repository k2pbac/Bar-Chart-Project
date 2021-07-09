$(document).ready(function () {
  drawBarChart(
    [324, 203, 23, 344, 95],
    {
      graphOptions: {},
      barOptions: {
        spacing: "20.5px",
        radius: "20%",
        shadow: "medium",
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
  let { spacing, radius, shadow } = options;
  let newElement;
  let shadowDim;
  let currentBar = 0;
  let width = data.length * 10;
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
    if (barCount > 1) {
      newElement = $(
        `<div style='box-shadow: ${shadowDim}; border-radius: ${radius}; height: ${
          data[currentBar] + 50
        }px; width: ${width}px; margin-right: ${spacing}; border: 1px solid black;'></div>`
      );
    } else {
      newElement = $(
        `<div style='box-shadow: ${shadowDim}; border-radius: ${radius}; height: ${
          data[currentBar] + 50
        }px; width: ${width}px; border: 1px solid black;'></div>`
      );
    }
    elements.push(newElement);
    newElement = "";
    barCount--;
    currentBar++;
    console.log(barCount);
  }
  return elements;
};
