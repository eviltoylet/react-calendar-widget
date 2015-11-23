'use strict';

// TODO: Split out the year and the month?
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var React = require('react');
var Header = React.createClass({
    render: function () {
        return (
            <div>
                <div className="calendar-year">
                    <div className="calendar-year-prev"
                         onClick={this.props.updateDate.bind(this, this.props.year - 1, this.props.month, null)}>&lt;</div>
                    <div className="calendar-year-text">
                        {this.props.year}
                    </div>
                    <div className="calendar-year-next"
                         onClick={this.props.updateDate.bind(this, this.props.year +1, this.props.month, null)}>&gt;</div>
                </div>
                <div className="calendar-month">
                    <div className="calendar-month-prev"
                         onClick={this.props.updateDate.bind(this, this.props.year, this.props.month - 1, null)}>&lt;</div>
                    <div className="calendar-month-text">
                        {months[this.props.month]}
                    </div>
                    <div className="calendar-month-next"
                         onClick={this.props.updateDate.bind(this, this.props.year, this.props.month + 1, null)}>&gt;</div>
                </div>
            </div>
        );
    }
});

module.exports = Header;