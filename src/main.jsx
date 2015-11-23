'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

// TODO: Consider just passing around the JavaScript Date object
var CalendarWidget = React.createClass({
    getInitialState: function () {
        var date = new Date();
        var selectedDate = date;
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return {
            selectedDate: date,
            date: date,
            day: day,
            month: month,
            year: year
        }
    },
    render: function () {
        var that = this;
        var updateDate = function (year, month, day) {
            var existingYear = that.state.year;
            var existingMonth = that.state.month;
            var existingDay = that.state.day;

            var date = new Date(year == null ? existingYear : year, month == null ? existingMonth : month, day == null ? existingDay : day);
            that.setState({
                date: date,
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            });
        };

        console.log(this.state.date);

        return (
            <div>
                <Header year={this.state.year} month={this.state.month} updateDate={updateDate}/>
                <Table year={this.state.year} month={this.state.month} day={this.state.day}/>
            </div>
        );
    }
});

module.exports = CalendarWidget;