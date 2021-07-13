# About

This Chart API was built to display a variety of Bar Charts that will display the data you provide. You can use it to display any information in a Regular Bar Chart or a Stacked Bar Chart. This was built for a LightHouse Labs Prep Project to better learn Javascript, jQuery and CSS features. 

## Examples of the API


<img src="/images/chart1.png" alt="Single Bar Chart">
<img src="/images/chart2.png" alt="Stacked Bar Chart">
<img src="/images/chart3.png" alt="Single Small Bar Chart">


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




