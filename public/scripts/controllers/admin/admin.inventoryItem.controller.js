
myApp.controller('AdmininventoryitemController',['StoreFactory', 'alertify', '$scope', '$routeParams', '$location', function(StoreFactory, alertify, $scope, $routeParams, $location) {

  const self = this;
  self.buttonStatus = 'active';

  let item_detail_id = $routeParams.id;

  // gets specific product by id on int
  StoreFactory.getImageDetail(item_detail_id);
  self.specificItem = StoreFactory.specificItem;



}]); // end myAPP.controller
