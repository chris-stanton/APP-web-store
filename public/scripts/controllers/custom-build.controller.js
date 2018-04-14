
myApp.controller('CustombuildController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.wraps = [
    {
      type: 'Open Cross',
      img_1: 'open_cross/1.png',
      img_2: 'open_cross/2.png',
    },
    {
      type: 'Closed Off',
      img_1: 'closed_off/1.png',
      img_2: 'closed_off/2.png',
    },
    {
      type: 'Razor',
      img_1: 'razor/1.png',
      img_2: 'razor/2.png',
    },
    {
      type: 'Tiger',
      img_1: 'tigers/1.png',
      img_2: 'tigers/2.png',
    }
  ];





}]); // end myAPP.controller
