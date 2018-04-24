
myApp.controller('SalesController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  StoreFactory.getSaleItems();

  self.items = StoreFactory.sale_items;


  // button click listener
  self.buy = (item_id) => {
    console.log(item_id);
  };




}]); // end myAPP.controller
