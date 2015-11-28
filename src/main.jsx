'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

var noop = function () {
};

var CalendarWidget = React.createClass({
    getInitialState: function () {
        var today = new Date();
        var selectedDate = null;
        var date = today;
        return {
            callbacks: {
                onDaySelect: this.props.onDaySelect || noop
            },
            selectedDate: selectedDate,
            today: today,
            date: date
        }
    },
    componentDidMount: function () {
        this.state.callbacks.onDaySelect(this.state.today);
    },
    render: function () {
        var self = this;
        var updateDate = function (year, month, day) {
            var existingYear = that.state.date.getFullYear();
            var existingMonth = that.state.date.getMonth();
            var existingDay = that.state.date.getDate();

            var date = new Date(year == null ? existingYear : year, month == null ? existingMonth : month, day == null ? existingDay : day);
            self.setState({
                date: date
            });
        };

        var resetToToday = function () {
            self.setState({
                date: self.state.today
            });
        };

        var onDaySelect = function (date) {
            self.setState({
                selectedDate: date
            });
            self.state.callbacks.onDaySelect(date);
        };

        return (
            <div style={{textAlign: "center", display:"inline-block"}}>
                <Header date={this.state.date} updateDate={updateDate} resetToToday={resetToToday}/>
                <Table date={this.state.date} today={this.state.today} selectedDate={this.state.selectedDate}
                       onDaySelect={onDaySelect}/>
            </div>
        );
    }
});

module.exports = CalendarWidget;