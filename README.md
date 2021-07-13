# About

This Chart API was built to display a variety of Bar Charts that will display the data you provide. You can use it to display any information in a Regular Bar Chart or a Stacked Bar Chart. This was built for a LightHouse Labs Prep Project to better learn Javascript, jQuery and CSS features. 

## Examples of the API


<img width="400px" src="/images/chart1.png" alt="Single Bar Chart">
<img width="400px" src="/images/chart2.png" alt="Small Single Bar Chart">
<img width="500px" src="/images/chart3.png" alt="Stacked Bar Chart">


## How to use

The Javascript function to create a chart is **drawBarChart(data, options, element);**

Calling this funtion with the requested parameters will create a chart and place it into an existing (or new) node or DOM element. 

The **data** parameter of the function is required to be an Array of Objects with the following syntax:

## Data Parameter

### Single Bar Chart

```javascript
[{ data1 } , { data2 } ... , { dataN }]; 
// You can add as many objects as per your needs
// But only 1 Data variable per object
// A data variable has the format: key - value , 
// where Key can be any name 'white space separated using _ (underscore)'
// Value can be any number 

//Example of Single Bar Chart Data

[{ apple: 2 } , { orange: 3 } , { grapes: 45 }];

```

### Stacked Bar Chart

```javascript
[{ key2: data1 } , { key2: data2 } ... , { keyN: dataN }]:
// You can add as many objects as per your needs
// But only 1 Data variable per object
// A data variable has the format : key - value 
// where Key can be any name 'white space separated using _ (underscore)'
// Value must be an array of Objects with the the format:
[{ key1: data1 }, { key2: data2 } ... , { keyN: dataN }] 
// The key of each object will be a label that describes the context of the value 
// The value will of type Number and can be any number. 

//Example of Stacked Bar Chart Data

[
  { Pepsi: [ { July: 123 } , { April: 12 } , { March: 142 } ] },
  { Coke: [ { August: 23 } , { March: 43 } , { June: 231 } ] }
];
```

## Options Parameter

The options parameter will be an object of two objects that are the Graph Options and the Bar Options (Available for both Stacked and Single Bar Chart)

### Graph Options

These options are accessed by passing in a graphOptions (case sensitive) Object

Key | Value | Description
------------ | ------------- | -------------
type | "single" or "multi" | Single will display a Single Bar Chart, and Multi will display a Stacked Bar Chart
size | "small" or "medium" or "large" or a size object with format { width: "" , height: "" } Values must be in pixels | The different set sizes will display the chart in a small, medium or large format to display the information clearly. Change this property depending on the amount of data or on how large you need the chart. 
axisPoint | "average" or "broad" or "precise" | <ul><li>The average value will take the average of your data and provide a value for the y-axis this will provide a medium amount of values on the y-axis</li> <li>The broad value uses the amount of data to get a value for the y-axis to display less values on the y-axis</li><li>The precise value uses percentages to get a value that will produce many values on the y-axis</li></ul>
yMeasurement | "" - A String for the y-axis measurement label | This label is positioned next to the y-axis label to display the measurement (e.g. in millions)
title | "" - A String | Title of the chart positioned at the top - center
fontSize | "" - A String with any sizing | Change the font size of the title 
fontColor | "" - A String with any color format | Change the font color of the title
yLabel | "" - A String for the y-axis label | The y-axis label is positioned on the y-axis vertically 
yLabelFontSize | "" - A String with any sizing | Change the font size of the y-axis label
xLabel | "" - A String for the x-axis label | The x-axis label is positioned on the x-axis horizontally
xLabelFontSize | "" - A string with any sizing | Change the font size of the x-axis label
gridLines | true or false | This value displays the gridlines on the back of the graph ( only a visual, not exact values )


### Bar Options

These options are accessed by passing in a barOptions (case sensitive) Object

Key | Value | Description
------------ | ------------- | -------------
spacing | "even" or "between" or "around" | <ul><li>The value 'even' will evenly space out the bars within the graph.</li><li>The value 'between' will put space between the bars.</li><li>The value 'around' will put space around the bars, between the graph and the bars.</li></ul>
radius | A String that contains a percentage between 0 - 100 (with % included) | The radius controls the radius of the bar 
fontSize | A String with any sizing | Change the font size of the text within the bar
fontColor | An Array of Strings | Each string will contain a color for the text within each bar. Not inputting an equal amount of colors for values will result in default text color of black.
position | "top" or "bottom" or "center" | <ul><li>The value 'top' will position the text within the bar at the top of the bar.</li><li>The value 'bottom' will position the text within the bar at the bottom of the bar.</li><li>The value 'center' will position the text within the bar at the center of the bar.</li></ul>
barColor | An Array of String | Each string will contain a color for the background of the bar. Not inputting an equal amount of colors for values will result in the first color (if one exists) as the color for the bars that don't have a color. 




