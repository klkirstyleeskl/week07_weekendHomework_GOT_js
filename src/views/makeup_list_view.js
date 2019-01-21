const PubSub = require('../helpers/pub_sub.js');
const MakeupDetailView = require('./makeup_detail_view');

const MakeupListView = function (container) {
  this.container = container;
};

MakeupListView.prototype.bindEvents = function () {
  PubSub.subscribe('Makeup:makeup-ready', (evt) => {
    console.log('makeup ready event fired');
    this.renderMakeupDetailViews(evt.detail);
  });
};

MakeupListView.prototype.renderMakeupDetailViews = function (makeup) {
  makeup.forEach((makeup) => {
    const makeupItem = this.createMakeupListItem(makeup);
    this.container.appendChild(makeupItem);
  });
};

MakeupListView.prototype.createMakeupListItem = function (makeup) {
  const makeupDetailView = new MakeupDetailView();
  const makeupDetail = makeupDetailView.createMakeupDetail(makeup);
  return makeupDetail;
};

module.exports = MakeupListView;
