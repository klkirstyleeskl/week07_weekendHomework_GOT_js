const PubSub = require('../helpers/pub_sub.js');
const MakeupDetailView = require('./makeup_detail_view');

const MakeupListView = function (container) {
  this.container = container;
};

MakeupListView.prototype.bindEvents = function () {
  PubSub.subscribe('Makep:makeup-ready', (evt) => {
    this.renderMakeupDetailViews(evt.detail);
  });
};

MakeupListView.prototype.renderMakeupDetailViews = function (makeups) {
  makeups.forEach((makeup) => {
    const makeupItem = this.createMunroListItem(makeup);
    this.container.appendChild(makeupItem);
  });
};

MakeupListView.prototype.createMakeupListItem = function (makeup) {
  const makeupDetailView = new MakeupDetailView();
  const makeupDetail = makeupDetailView.createMakeupDetail(makeup);
  return makeupDetail;
};

module.exports = MakeupListView;
