'use strict';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var React = require('react');
var Header = React.createClass({
    render: function () {
        var month = this.props.date.getMonth();
        var year = this.props.date.getFullYear();
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
                         onClick={this.props.updateDate.bind(this, year - 1, month, null)}>«
                    </div>
                    <div className="calendar-month-prev"
                         style={{display: "inline-block", float: "left", cursor: "pointer", marginLeft: "4px"}}
                         onClick={this.props.updateDate.bind(this, year, month - 1, null)}>‹
                    </div>

                    <div className="calendar-today"
                         onClick={this.props.resetToToday}
                         style={{display: "inline-block", cursor: "pointer"}}>
                        Today
                    </div>

                    <div className="calendar-year-next"
                         style={{display: "inline-block", float: "right", cursor: "pointer", marginRight: "2px"}}
                         onClick={this.props.updateDate.bind(this, year +1, month, null)}>»
                    </div>

                    <div className="calendar-month-next"
                         style={{display: "inline-block", float: "right", cursor: "pointer", marginRight: "4px"}}
                         onClick={this.props.updateDate.bind(this, year, month + 1, null)}>›
                    </div>


                </div>
            </div>
        );
    }
});

module.exports = Header;