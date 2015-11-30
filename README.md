# react-calendar-widget
## Introduction
This project is for creating a calendar widget using React.
 
## Usage
To use this component:
```
var ReactDOM = require('react-dom');
var CalendarWidget = require('react-calendar-widget');

var setText = function (date) {
    // code for processing the JavaScript Date object
};

ReactDOM.render(
    <CalendarWidget onDaySelect={setText}/>,
    document.getElementById('calendar')
);
```
Note that you can provide a callback on the property `onDaySelect`.