$(document).ready(function () {
  drawBarChart(
    [1, 2, 3, 4, 5],
    {
      barOptions: {
        width: "100px",
        height: "100px",
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
    chart = createBars(options.barOptions, barCount);
  }

  for (let item of chart) {
    $(".here").append(item);
  }
};

const createBars = function (options, barCount) {
  let elements = [];
  let { height, width, spacing, radius, shadow } = options;
  let newElement;
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
  }

  while (barCount > 0) {
    if (barCount > 1) {
      newElement = $(
        `<div style='box-shadow: ${shadowDim}; border-radius: ${radius}; height: ${height}; width: ${width}; margin-right: ${spacing}; border: 1px solid black;'></div>`
      );
    } else {
      newElement = $(
        `<div style='box-shadow: ${shadowDim}; border-radius: ${radius}; height: ${height}; width: ${width}; border: 1px solid black;'></div>`
      );
    }
    elements.push(newElement);
    newElement = "";
    barCount--;
    console.log(barCount);
  }
  return elements;
};
