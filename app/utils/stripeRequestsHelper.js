var axios = require('axios');

var stripeRequests = {
  allOrdersList: function () {
    return axios.get('http://localhost:3000/orders')
  }
}

module.exports = stripeRequests;