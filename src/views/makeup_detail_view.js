const MakeupDetailView = function () {};

MakeupDetailView.prototype.createMakeupDetail = function (makeup) {
  const makeupDetail = document.createElement('div');
  makeupDetail.classList.add('item-detail');

  const name = document.createElement('h3');
  name.textContent = makeup.name;
  name.className = 'name'
  makeupDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const brand = this.createDetailListItem('Brand', makeup.brand);
  console.log(makeup.brand);
  detailsList.appendChild(brand);

  const price = this.createDetailListItem('Price', makeup.price)
  detailsList.appendChild(price);

  const description = this.createDetailListItem('description', makeup.description)
  detailsList.appendChild(description);

  const photo = document.createElement('img');
  photo.src = makeup.image_link;
  photo.className = 'photo';
  detailsList.appendChild(photo);


  makeupDetail.appendChild(detailsList);
  return makeupDetail;
};


MakeupDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = MakeupDetailView;
