$(document).ready(function () {
  let temp = function () {
    return alert("hello");
  };

  drawBarChart(
    [1, 2, 3, 4, 5],
    { barOptions: { width: "200px", height: "200px" } },
    "div"
  );
});

const drawBarChart = function (data, options, element) {
  let chart;

  if (options.barOptions) {
    chart = createBars(options.barOptions);
  }

  $("body").html(chart);
};

const createBars = function (options, element) {
  let newElement = $(`<${element}></${element}>`).text("hello");

  return newElement;
};
