'use strict';

var React = require('react');
var Header = require('./header/');
var Table = require('./table/');

var CalendarWidget = React.createClass({
    getInitialState: function () {
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();
        return {
            date: date,
            month: month,
            year: year
        }
    },
    render: function () {
        return (
            <div>
                <Header year={this.state.year} month={this.state.month}/>
                <Table/>
            </div>
        );
    }
});

module.exports = CalendarWidget;