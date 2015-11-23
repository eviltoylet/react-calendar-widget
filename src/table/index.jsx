var React = require('react');

// TODO: Implement the logic to determine what day of the week the first day of the month starts on
var Table = React.createClass({
    render: function () {
        var day = 0;
        var tableRows = [];
        for (var x = 0; x < 5; x++) {
            var tableCols = [];
            for (var y = 0; y < 7; y++) {
                tableCols.push(<td key={"col_" + y}>{day}</td>);
                day++;
            }
            tableRows.push(<tr key={"row_" + x}>{tableCols}</tr>);
        }
        return (
            <div>
                <table>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Table;