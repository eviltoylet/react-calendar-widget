var React = require('react');

// https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
var dayOfWeekForFirstDateInMonth = function (month, year) {
    var date = new Date(year, month, 1);
    return date.getDay();
};

var isLeapYear = function (year) {
    if (year % 4 == 0) {
        if (year % 100) {
            return year % 400;
        }
        return true;
    }
    return false;
};

var daysInMonth = function (month, year) {
    if (month == 1) {
        var leapYear = isLeapYear(year);
        return leapYear ? 29 : 28;
    } else {
        return month % 2 == 0 ? 31 : 30;
    }
};

// TODO: Refactor this code to make it cleaner
var Table = React.createClass({
    isToday: function (year, month, day) {
        var today = this.props.today;
        return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    },
    render: function () {
        var month = this.props.date.getMonth();
        var year = this.props.date.getFullYear();
        var startingDayOfWeek = dayOfWeekForFirstDateInMonth(month, year);
        var day = 1;
        var start = false;
        var stop = false;
        var tableRows = [];
        var numberOfDays = daysInMonth(month, year);
        tableRows.push(
            <tr>
                <td>S</td>
                <td>M</td>
                <td>T</td>
                <td>W</td>
                <td>T</td>
                <td>F</td>
                <td>S</td>
            </tr>);
        for (var x = 0; x < 6; x++) {
            var tableCols = [];
            for (var y = 0; y < 7; y++) {
                if (startingDayOfWeek == y) {
                    start = true;
                }
                tableCols.push(<td key={"col_" + y}
                                   className={ this.isToday(year, month, day) ? "today" : ""}
                                   style={{cursor: "pointer"}}
                                   onClick={this.props.onDaySelect.bind(this, new Date(year, month, day))}>{ start  && !stop ? day : ""}</td>);
                if (start) {
                    day++;
                }
                if (day > numberOfDays) {
                    stop = true;
                }
            }
            tableRows.push(<tr key={"row_" + x}>{tableCols}</tr>);
        }
        return (
            <table style={{marginLeft: "auto", marginRight: "auto"}}>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        );
    }
});

module.exports = Table;