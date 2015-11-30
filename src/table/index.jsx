var React = require('react');
var classNames = require('classnames');

// https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
var dayOfWeekForFirstDateInMonth = function (month, year) {
    var date = new Date(year, month, 1);
    return date.getDay();
};

var daysInMonth = function (month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    var monthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
    return monthLength;
};

// TODO: Figure out a better paradigm for this
var styles = {
    today: {
        border: "1px solid red",
        cursor: "pointer"
    },
    selected: {
        backgroundColor: "#ccccff",
        cursor: "pointer"
    },
    todayAndSelected: {
        border: "1px solid red",
        backgroundColor: "#ccccff",
        cursor: "pointer"
    },
    default: {
        cursor: "pointer"
    }
};

// TODO: Refactor this code to make it cleaner
var Table = React.createClass({
    isToday: function (year, month, day) {
        var today = this.props.today;
        return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    },
    isSelected: function (year, month, day) {
        var selectedDate = this.props.selectedDate;
        if (!selectedDate) {
            return false;
        } else {
            return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day;
        }
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
            <tr style={{fontWeight: "bold"}}>
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
                var styleName = "default";
                if (this.isSelected(year, month, day)) {
                    if (this.isToday(year, month, day)) {
                        styleName = "todayAndSelected";
                    } else {
                        styleName = "selected";
                    }
                } else {
                    if (this.isToday(year, month, day)) {
                        styleName = "today";
                    } else {
                        styleName = "default";
                    }
                }
                tableCols.push(<td key={"col_" + y}
                                   className={ classNames({today: this.isToday(year, month, day), selected: this.isSelected(year,month, day)})}
                                   style={styles[styleName]}
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
            <table style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        );
    }
});

module.exports = Table;