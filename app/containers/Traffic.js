var React = require('react');
var googleRequestsHelper = require('../utils/googleRequestsHelper');
var TrafficItem = require('../components/TrafficItem');

var Traffic = React.createClass({
  getInitialState: function () {
    return {
      loading: true,
      trafficInfo: [],
      totals: {}
    }
  },
  componentDidMount: function () {
    googleRequestsHelper.getAnalytics().then( function( response ) {
      this.setState({
        loading: false,
        trafficInfo: response.data.rows,
        totals: response.data.totalsForAllResults
      });
    }.bind(this))
  },
  render: function () {
    if ( this.state.loading ) {
      var trafficRender =
        <p>Loading</p>
    } else {
      var trafficRender =
        <div>
          <table id="traffic-table" className="table table-striped">
            <tbody>
              <tr>
                <th>Source</th>
                <th>Sessions</th>
                <th>Avg. Session</th>
              </tr>
              {
                this.state.trafficInfo.map( function( item, index ) {
                    return <TrafficItem
                        key={ index }
                        item={ item } />
                })
              }
            </tbody>
          </table>
          <div className="row">
            <div className="col-lg-6 text-center">
              <h3 className="main-color">Total Sessions: { this.state.totals['ga:sessions'] }</h3>
            </div>
            <div className="col-lg-6 text-center">
              <h3 className="main-color">Total Average Duration: { this.state.totals['ga:avgSessionDuration']}</h3>
            </div>
          </div>
        </div>
    }
    return (
      <div>
        { trafficRender }
      </div>
    )
  }
});

module.exports = Traffic;