var React = require('react');

var Item = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{ this.props.item.items[0].description }</td>
        <td>${ this.props.item.amount/100 }.00</td>
        <td>{ this.props.item.shipping.address.state }</td>
        <td>{ this.props.item.status }</td>
      </tr>
    )
  }
});

module.exports = Item;