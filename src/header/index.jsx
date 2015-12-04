'use strict';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var React = require('react');
var noop = function () {
};

// TODO: Instead of isWithinRange, use something else. This is currently disabling the previous year navigation a bit
// too premature.
var Header = React.createClass({
    isWithinRange: function (year, month) {
        var lowerBound = this.props.range[0];
        lowerBound = new Date(lowerBound.getFullYear(), lowerBound.getMonth());
        var upperBound = this.props.range[1];
        upperBound = new Date(upperBound.getFullYear(), upperBound.getMonth());

        var date = new Date(year, month);

        return lowerBound <= date && date <= upperBound;
    },
    render: function () {
        var month = this.props.date.getMonth();
        var year = this.props.date.getFullYear();

        var styles = {
            valid: {
                cursor: "pointer"
            },
            invalid: {
                color: "#d3d3d3",
                cursor: "not-allowed"
            }
        };

        var previousYear = noop;
        if (this.isWithinRange(year - 1, month)) {
            previousYear = this.props.updateDate.bind(this, year - 1, month, null);
        }

        var previousMonth = noop;
        if (this.isWithinRange(year, month - 1)) {
            previousMonth = this.props.updateDate.bind(this, year, month - 1, null);
        }

        var nextYear = noop();
        if (this.isWithinRange(year + 1, month)) {
            nextYear = this.props.updateDate.bind(this, year + 1, month, null);
        }

        var nextMonth = noop();
        if (this.isWithinRange(year + 1, month)) {
            nextMonth = this.props.updateDate.bind(this, year, month + 1, null);
        }

        return (
            <div>
                {/* TODO: Add some sort of selection when month / year are clicked? */}
                <div className="calendar-year-month"
                     style={{backgroundColor: "#0066ff", color: "white", borderBottom: "1px solid black"}}>
                    {months[month] + " " + year}
                </div>
                <div className="calendar-navigation">
                    <div className="calendar-year-prev"
                         style={{display: "inline-block", float: "left", cursor: "pointer", marginLeft: "2px"}}
                         onClick={previousYear}>«
                    </div>
                    <div className="calendar-month-prev"
                         style={{display: "inline-block", float: "left", cursor: "pointer", marginLeft: "4px"}}
                         onClick={previousMonth}>‹
                    </div>

                    <div className="calendar-today"
                         onClick={this.props.resetToToday}
                         style={{display: "inline-block", cursor: "pointer"}}>
                        Today
                    </div>

                    <div className="calendar-year-next"
                         style={{display: "inline-block", float: "right", cursor: "pointer", marginRight: "2px"}}
                         onClick={nextYear}>»
                    </div>

                    <div className="calendar-month-next"
                         style={{display: "inline-block", float: "right", cursor: "pointer", marginRight: "4px"}}
                         onClick={nextMonth}>›
                    </div>


                </div>
            </div>
        );
    }
});

module.exports = Header;