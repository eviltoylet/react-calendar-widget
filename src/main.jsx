'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

var CalendarWidget = React.createClass({
    getInitialState: function () {
        var today = new Date();
        var date = today;
        return {
            today: today,
            date: date
        }
    },
    render: function () {
        var that = this;
        var updateDate = function (year, month, day) {
            var existingYear = that.state.date.getFullYear();
            var existingMonth = that.state.date.getMonth();
            var existingDay = that.state.date.getDate();

            var date = new Date(year == null ? existingYear : year, month == null ? existingMonth : month, day == null ? existingDay : day);
            that.setState({
                date: date
            });
        };

        var resetToToday = function () {
            that.setState({
                date: that.state.today
            });
        };

        return (
            <div style={{textAlign: "center", display:"inline-block"}}>
                <Header date={this.state.date} updateDate={updateDate} resetToToday={resetToToday}/>
                <Table date={this.state.date} today={this.state.today}/>
            </div>
        );
    }
});

module.exports = CalendarWidget;