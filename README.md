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

## Optional properties
The following properties can be provided.
- `onDaySelect`: a callback that receives the date that was selected.
- `range`: a two element array (e.g. `[new Date(), null]`) which contains the start and end dates for which the calendar should be functional. If null is provided, there is no range set.

## Known Issues
- Year and month navigation when there's a range imposed is unintuitive for some cases.