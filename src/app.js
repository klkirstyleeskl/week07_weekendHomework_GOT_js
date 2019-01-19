const MakeUp= require('./models/makeup.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

    // const makeupView = new MakeUp();
    // makeupView.bindEvents();



    const makeup = new MakeUp();
    makeup.getData();


});
