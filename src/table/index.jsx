var React = require('react');
var classNames = require('classnames');

// https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
var dayOfWeekForFirstDateInMonth = function (month, year) {
    var date = new Date(year, month, 1);
    return date.getDay();
};

var styles = {
    otherMonth: {
        color: "#d3d3d3"
    },
    today: {
        boxShadow: "inset 0px 0px 1px red",
        cursor: "pointer"
    },
    selected: {
        backgroundColor: "#ccccff",
        cursor: "pointer"
    },
    default: {
        cursor: "pointer"
    },
    outOfRange: {
        backgroundColor: "#e3e3e3",
        cursor: "not-allowed"
    }
};

var Table = React.createClass({
    isWithinRange: function (date) {
        var lowerBound = this.props.range[0];
        var upperBound = this.props.range[1];

        return lowerBound <= date && date <= upperBound;
    },
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
        var day = 1 - startingDayOfWeek;
        var tableRows = [];
        tableRows.push(
            <tr key="daysOfWeek" style={{fontWeight: "bold"}}>
                <td key="Sunday">S</td>
                <td key="Monday">M</td>
                <td key="Tuesday">T</td>
                <td key="Wednesday">W</td>
                <td key="Thursday">T</td>
                <td key="Friday">F</td>
                <td key="Saturday">S</td>
            </tr>);
        for (var x = 0; x < 6; x++) {
            var tableCols = [];
            for (var y = 0; y < 7; y++) {
                var stylesToApply = ["default"];
                if (!this.isWithinRange(new Date(year, month, day))) {
                    stylesToApply.push("outOfRange");
                }

                if (this.isToday(year, month, day)) {
                    stylesToApply.push("today");
                }

                if (this.isSelected(year, month, day)) {
                    stylesToApply.push("selected");
                }

                if (new Date(year, month, day).getMonth() !== month) {
                    stylesToApply.push("otherMonth");
                }

                var style = {};
                for (var styleNumber = 0; styleNumber < stylesToApply.length; styleNumber++) {
                    var currentStyle = styles[stylesToApply[styleNumber]];
                    for (var attribute in currentStyle) {
                        style[attribute] = currentStyle[attribute];
                    }
                }

                var displayDay = new Date(year, month, day).getDate();
                tableCols.push(<td key={"col_" + y}
                                   className={ classNames({today: this.isToday(year, month, day), selected: this.isSelected(year,month, day)})}
                                   style={style}
                                   onClick={this.props.onDaySelect.bind(this, new Date(year, month, day))}>{displayDay}</td>);
                day++;
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