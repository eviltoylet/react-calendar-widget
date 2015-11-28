var ReactDOM = require('react-dom');
var CalendarWidget = require('../src/main');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var setText = function (date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    document.getElementById("selectedDay").innerHTML = months[month] + " " + day + ", " + year;
};

ReactDOM.render(
    <CalendarWidget onDaySelect={setText}/>,
    document.getElementById('calendar')
);