
myApp.controller('ShopController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;


  self.items = [
    {
      id: 0,
      item: "Custom Rods",
      img: "custom-builds.png"
    },
    {
      id: 1,
      item: "Standard Rods",
      img: "standard-builds.png"
    },
    {
      id: 2,
      item: "Parts & Supplies",
      img: "blanks.png"
    }
  ];





}]); // end myAPP.controller
