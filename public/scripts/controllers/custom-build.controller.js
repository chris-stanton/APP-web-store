
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('CustombuildController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.grips = [
    {
      id: 0,
      type: '3" Cork',
      cost: 0,
      img: '3-cork.png',
    },
    {
      id: 1,
      type: '5" Cork',
      cost: 0,
      img: '5-cork.png',
    },
    {
      id: 2,
      type: 'Split Grip Cork',
      cost: 5,
      img: 'split-grip.png',
    },
    {
      id: 3,
      type: '3" Carbon Fiber Insert',
      cost: 15,
      img: '3-cfi.png',
    },
    {
      id: 4,
      type: '5" Carbon Fiber Insert',
      cost: 17,
      img: '5-cfi.png',
    }
  ];

  self.wraps = [
    {
      id: 0,
      type: 'Open Cross',
      cost: 25,
      img_1: 'open_cross/1.png',
      img_2: 'open_cross/2.png',
    },
    {
      id: 1,
      type: 'Closed Off',
      cost: 50,
      img_1: 'closed_off/1.png',
      img_2: 'closed_off/2.png',
    },
    {
      id: 2,
      type: 'Spiral Razor',
      cost: 45,
      img_1: 'razor/1.png',
      img_2: 'razor/2.png',
    },
    {
      id: 3,
      type: 'Tiger',
      cost: 40,
      img_1: 'tigers/1.png',
      img_2: 'tigers/2.png',
    }
  ];





}]); // end myAPP.controller
