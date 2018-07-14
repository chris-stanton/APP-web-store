
myApp.controller('AdmininventoryController',['StoreFactory', 'alertify', '$scope', '$routeParams', '$location', function(StoreFactory, alertify, $scope, $routeParams, $location) {

  const self = this;
  self.buttonStatus = 'active';

  // gets all inventroy items from DB
  StoreFactory.getAllInventroy();
  // return of all inventory items from DB
  self.inventoryItems = StoreFactory.inventoryItems;








}]); // end myAPP.controller
