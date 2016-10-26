var React = require('react');

var Totals = React.createClass({
  grossSales: function () {
    var total = this.props.orders.reduce( function( sum, item ) {
      return sum + item.amount
    }, 0);

    return total / 100
  },
  calculateCancellations: function () {
    return this.props.orders.filter( function( item ) {
      return item.status === "canceled"
    }).length
  },
  calculateCancellationPercentage: function () {
    return (this.calculateCancellations() / this.props.orders.length) * 100
  },
  calculateNetSales: function () {
    paidOrders = this.props.orders.filter( function( item ) {
      return item.status === "paid"
    });

    var paid_total = paidOrders.reduce( function( sum, item ) {
      return sum + item.amount
    }, 0);

    return paid_total / 100
  },
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 text-center">
            <h3 className="main-color">Total Orders: { this.props.orders.length }</h3>
          </div>
          <div className="col-lg-6 text-center">
            <h3 className="main-color">Gross Sales: ${ this.grossSales() }.00</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center">
            <h3 className="main-color">Cancellations: { this.calculateCancellations() }</h3>
          </div>
          <div className="col-lg-6 text-center">
            <h3 className="main-color">Cancellation Percentage: { this.calculateCancellationPercentage() }%</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 text-center">
            <h3 className="main-color">Net Sales: ${ this.calculateNetSales() }.00</h3>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Totals;