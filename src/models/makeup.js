const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Makeup = function () {
  this.makeupsData = [];
  // this.regions = [];
};


Makeup.prototype.getData = function(){
  const request = new RequestHelper('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan');
  request.get().then((data) => {
    this.makeupsData = data;
    PubSub.publish('Makeup:makeup-ready', this.makeupsData);
  });
}

module.exports = Makeup;



// const RequestHelper = require('../helpers/request_helper.js');
// const PubSub = require('../helpers/pub_sub.js');
//
// const Dogs = function () {
//   this.data = null;
// };

// Dogs.prototype.bindEvents = function () {
//   PubSub.subscribe('BreedFormView:form-submitted', (event) => {
//     const breed = event.detail;
//     this.getData(breed);
//   });
// };
//
// Dogs.prototype.getData = function (breed) {
//   const url = `https://dog.ceo/api/breed/${ breed }/images`;
//   const request = new RequestHelper(url);
//
//   const myPromise = request.get();
//
//   myPromise.then((data) => {
//     this.data = data.message;
//     PubSub.publish('Dogs:dog-data-loaded', this.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
// };
//
// module.exports = Dogs;
