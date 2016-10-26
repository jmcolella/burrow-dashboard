var React = require('react');
var OrdersList = require('../containers/OrdersList');
var Traffic = require('../containers/Traffic');
var Totals = require('../containers/Totals');
var stripeRequests = require('../utils/stripeRequestsHelper');

var SalesContainer = React.createClass({
  render: function () {
    return (
      <div>
        <OrdersList
          orders={ this.props.orders }
          onSort={ this.props.onSort } />

        <div className="row">
          <div className="col-lg-12">
            <Totals
              orders={ this.props.orders } />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SalesContainer;