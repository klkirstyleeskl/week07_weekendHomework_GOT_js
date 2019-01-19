const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const MakeUp = function() {
  this.data = null;
};

MakeUp.prototype.getData = function () {
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan`;
  const request = new RequestHelper(url);
  const myPromise = request.get();
  myPromise.then((data) => {
  this.data = data;
  console.log(data);
  PubSub.publish('MakeUp:makeup-data-loaded', this.data);
})

.catch((err) => {
  console.error(err);
  })
};

module.exports = MakeUp;
