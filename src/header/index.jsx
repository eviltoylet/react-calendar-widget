'use strict';

// TODO: Split out the year and the month?
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var React = require('react');
var Header = React.createClass({
    render: function () {
        return (
            <div>
                <div className="calendar-year">{this.props.year}</div>
                <div className="calendar-month">{months[this.props.month]}</div>
            </div>
        );
    }
});

module.exports = Header;