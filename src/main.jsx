'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

var CalendarWidget = React.createClass({
    getInitialState: function () {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return {
            date: date,
            day: day,
            month: month,
            year: year
        }
    },
    render: function () {
        return (
            <div>
                <Header year={this.state.year} month={this.state.month}/>
                <Table year={this.state.year} month={this.state.month} day={this.state.day}/>
            </div>
        );
    }
});

module.exports = CalendarWidget;