const PubSub = require('../helpers/pub_sub.js');
const MakeUp = require('./munro_view.js');


const ListView = function(container) {
  this.container = container
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('MakeUp:makeup-data-loaded', (event) => {
      this.munro = event.detail
     // this.render()
  });
};



module.exports = ListView;
