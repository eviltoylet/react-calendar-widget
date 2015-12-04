'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

var noop = function () {
};

var CalendarWidget = React.createClass({
    isWithinRange: function (date) {
        var lowerBound = this.state.range[0];
        var upperBound = this.state.range[1];

        return lowerBound <= date && date <= upperBound;
    },
    getInitialState: function () {
        var today = new Date();
        var selectedDate = null;
        var date = today;
        var range = this.props.range || [];
        // TODO: Consider if we'll actually need to use new Date(-8640000000000000)
        range[0] = range[0] || new Date(0);
        range[1] = range[1] || new Date(8640000000000000);
        range[0] = new Date(range[0].getFullYear(), range[0].getMonth(), range[0].getDate());
        range[1] = new Date(range[1].getFullYear(), range[1].getMonth(), range[1].getDate());
        return {
            callbacks: {
                onDaySelect: this.props.onDaySelect || noop
            },
            selectedDate: selectedDate,
            today: today,
            date: date,
            range: range
        }
    },
    render: function () {
        var self = this;
        var updateDate = function (year, month, day) {
            var existingYear = self.state.date.getFullYear();
            var existingMonth = self.state.date.getMonth();
            var existingDay = self.state.date.getDate();

            var date = new Date(year == null ? existingYear : year, month == null ? existingMonth : month, day == null ? existingDay : day);

            if (self.isWithinRange(date)) {
                self.setState({
                    date: date
                });
            }
        };

        var resetToToday = function () {
            self.setState({
                date: self.state.today
            });
        };

        var onDaySelect = function (date) {
            if (!self.isWithinRange(date)) {
                return;
            }

            self.setState({
                date: date,
                selectedDate: date
            });
            self.state.callbacks.onDaySelect(date);
        };

        return (
            <div style={{textAlign: "center", display:"inline-block", border: "1px solid black"}}>
                <Header date={this.state.date} updateDate={updateDate} resetToToday={resetToToday}
                        range={this.state.range}/>
                <Table date={this.state.date} today={this.state.today} selectedDate={this.state.selectedDate}
                       onDaySelect={onDaySelect} range={this.state.range}/>
            </div>
        );
    }
});

module.exports = CalendarWidget;