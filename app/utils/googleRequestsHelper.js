var axios = require('axios');

googleRequestsHelper = {
  getAnalytics: function () {
    return axios.request({
      url: 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A119576095&start-date=2016-06-01&end-date=2016-09-01&metrics=ga%3Asessions%2Cga%3Abounces%2Cga%3AavgSessionDuration&dimensions=ga%3AreferralPath%2Cga%3Asource%2Cga%3Amedium&access_token=ya29.CjCIA4aII_h9fSjsMlac9jQPzMbwyBVDdw86tFjmUVP0i9BJA0KuP5Z0OyKf8uO146o'
    });
  }
}

module.exports = googleRequestsHelper;