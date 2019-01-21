const Makeup = require('./models/makeup.js');
const MakeupListView = require('./views/makeup_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript-loaded');
  const listContainer = document.querySelector('#makeup-list');
  const makeupListView = new MakeupListView(listContainer);
  makeupListView.bindEvents();

  const makeup = new Makeup;
  makeup.getData();
});
