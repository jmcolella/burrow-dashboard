var React = require('react');
var MetricsContainer = require('../containers/MetricsContainer');

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid main-font">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="main-color">Burrow Dashboard</h1>
          </div>
        </div>
        <MetricsContainer />
      </div>
    )
  }
});

module.exports = App;