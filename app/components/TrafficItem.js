var React = require('react');

var TrafficItem = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{ this.props.item[1] }</td>
        <td>{ this.props.item[4] }</td>
        <td>{ this.props.item[5] }</td>
      </tr>
    )
  }
});

module.exports = TrafficItem;