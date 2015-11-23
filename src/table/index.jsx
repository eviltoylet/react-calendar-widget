var React = require('react');

// https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
var dayOfWeekForFirstDateInMonth = function (month, year) {
    var date = new Date(year, month, 1);
    return date.getDay();
};

var isLeapYear = function (year) {
    if (year % 4 == 0) {
        if (year % 100) {
            if (year % 400) {
                return true;
            } else {
                return false;
            }
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
    render: function () {
        var startingDayOfWeek = dayOfWeekForFirstDateInMonth(this.props.month, this.props.year);
        var day = 1;
        var start = false;
        var stop = false;
        var tableRows = [];
        var numberOfDays = daysInMonth(this.props.month, this.props.year);
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
                tableCols.push(<td key={"col_" + y}>{ start  && !stop ? day : ""}</td>);
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
            <div>
                <table>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Table;