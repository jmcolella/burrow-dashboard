var React = require('react');
var SalesContainer = require('../containers/SalesContainer');
var Traffic = require('../containers/Traffic');
var stripeRequests = require('../utils/stripeRequestsHelper');

var MetricsContainer = React.createClass({
  getInitialState: function () {
    return {
      orders: [],
      visibileList: [],
      traffic: false
    }
  },
  componentDidMount: function () {
    stripeRequests.allOrdersList().then( function( response ) {
      this.setState({
        orders: response.data.orders
      });
    }.bind(this));
  },
  showOrderList: function () {
    stripeRequests.allOrdersList().then( function( response ) {
      this.setState({
        orders: response.data.orders,
        traffic: false
      });
    }.bind(this));
  },
  handleSort: function ( type ) {
    if ( type === "status-column") {
      this.state.orders.sort( function( itemA, itemB ) {
        if ( itemA.status < itemB.status ) {
          return -1;
        }
        if ( itemA.status > itemB.status ) {
          return 1;
        }
        return 0;
      });
      this.setState({
        orders: this.state.orders
      })
    } else if (type === "region-column") {
      this.state.orders.sort( function( itemA, itemB ) {
        if ( itemA.shipping.address.state < itemB.shipping.address.state ) {
          return -1;
        }
        if ( itemA.shipping.address.state > itemB.shipping.address.state ) {
          return 1;
        }
        return 0;
      })
      this.setState({
        orders: this.state.orders
      })
   } else if ( type === "item-column" ) {
      this.state.orders.sort( function( itemA, itemB ) {
        if ( itemA.items[0].description > itemB.items[0].description ) {
          return 1;
        }
        if ( itemA.items[0].description < itemB.items[0].description ) {
          return -1;
        }
        return 0;
      })
      this.setState({
        orders: this.state.orders
      });
    }
  },
  toggleTraffic: function () {
    this.setState({
      traffic: true
    });
  },
  render: function () {
    if ( this.state.traffic ) {
      var containerRender =
        <Traffic />
    } else {
      var containerRender =
        <SalesContainer
          orders={ this.state.orders }
          onSort={ this.handleSort } />
    }
    return (
      <div className="container dashboard-container">
        <div className="row">
          <div className="col-lg-12 ">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a className="main-color" href="#orders" aria-controls="orders" role="tab" data-toggle="tab" onClick={ this.showOrderList }>Orders</a></li>
              <li role="presentation"><a className="main-color" href="#traffic" aria-controls="traffic" role="tab" data-toggle="tab" onClick={ this.toggleTraffic }>Traffic</a></li>
            </ul>


            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="orders">
                { containerRender }
              </div>
              <div role="tabpanel" className="tab-pane" id="traffic">
                { containerRender }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MetricsContainer;