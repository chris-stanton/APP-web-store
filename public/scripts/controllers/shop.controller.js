
myApp.controller('ShopController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;


  self.items = [
    {
      id: 0,
      item: "Custom Rods",
      img: "custom-builds.png",
      link: "#!custom_builds"
    },
    {
      id: 1,
      item: "Standard Rods",
      img: "standard-builds.png",
      link: "#!standard_builds"
    },
    {
      id: 2,
      item: "Parts & Supplies",
      img: "blanks.png",
      link: "#!parts"
    }
  ];





}]); // end myAPP.controller
