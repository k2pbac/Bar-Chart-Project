$(document).ready(function () {
  drawBarChart(
    [1, 2, 3, 4, 5],
    {
      barOptions: { width: "200px", height: "200px", spacing: "20.5px" },
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
  let { height, width, spacing } = options;
  let newElement;

  while (barCount > 0) {
    if (barCount > 1) {
      newElement = $(
        `<div style='height: ${height}; width: ${width}; margin-right: ${spacing}; border: 1px solid black;'></div>`
      );
    } else {
      newElement = $(
        `<div style='height: ${height}; width: ${width}; border: 1px solid black;'></div>`
      );
    }
    elements.push(newElement);
    newElement = "";
    barCount--;
    console.log(barCount);
  }
  return elements;
};
