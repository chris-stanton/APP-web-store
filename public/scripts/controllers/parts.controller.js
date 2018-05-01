
// Copyright (c) 2018 Christopher J. Stanton 
myApp.controller('PartsController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.parts = [
    {
      id: 0,
      part: "Blanks",
      img: "blanks.png"
    },
    {
      id: 1,
      part: "Guides",
      img: "guides.png"
    },
    {
      id: 2,
      part: "Handles",
      img: "handles.png"
    },
    {
      id: 3,
      part: "Tools",
      img: "tools.png"
    }
  ];




}]); // end myAPP.controller
