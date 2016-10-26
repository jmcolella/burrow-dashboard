var React = require('react');
var Item = require('../components/Item');

var OrdersList = React.createClass({
  handleClick: function ( e ){
    this.props.onSort( e.target.id );
  },
  render: function () {
    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <th><a className="main-color" href="#" id="item-column" onClick={ this.handleClick }>Item</a></th>
            <th>Amount</th>
            <th><a className="main-color" href="#" id="region-column" onClick={ this.handleClick }>Region/State</a></th>
            <th><a className="main-color" href="#" id="status-column" onClick={ this.handleClick }>Status</a></th>
          </tr>
          {
            this.props.orders.map( function( item, index ) {
              return <Item
                        key={ index }
                        item={ item } />
            })
          }
        </tbody>
      </table>
    )
  }
});

module.exports = OrdersList;