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
  let newBars = drawBars(data, options.barOptions);

  $(".container").append(newBars);
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

const drawBars = function (data, options) {};
