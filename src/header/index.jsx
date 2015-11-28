'use strict';
var inlineStyle = {
    display: "inline-block"
};


// TODO: Split out the year and the month?
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var React = require('react');
var Header = React.createClass({
    render: function () {
        var month = this.props.date.getMonth();
        var year = this.props.date.getFullYear();
        return (
            <div>
                <div className="calendar-year-month">
                    {months[month] + " " + year}
                </div>
                <div className="calendar-navigation">
                    <div className="calendar-year-prev"
                         style={{display: "inline-block", float: "left"}}
                         onClick={this.props.updateDate.bind(this, year - 1, month, null)}>«
                    </div>
                    <div className="calendar-month-prev"
                         style={{display: "inline-block", float: "left"}}
                         onClick={this.props.updateDate.bind(this, year, month - 1, null)}>‹
                    </div>

                    <div className="calendar-today"
                         onClick={this.props.resetToToday}
                         style={{display: "inline-block"}}>
                        Today
                    </div>

                    <div className="calendar-year-next"
                         style={{display: "inline-block", float: "right"}}
                         onClick={this.props.updateDate.bind(this, year +1, month, null)}>»
                    </div>

                    <div className="calendar-month-next"
                         style={{display: "inline-block", float: "right"}}
                         onClick={this.props.updateDate.bind(this, year, month + 1, null)}>›
                    </div>


                </div>
            </div>
        );
    }
});

module.exports = Header;