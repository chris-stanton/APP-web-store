
// Copyright (c) 2018 Christopher J. Stanton 
myApp.controller('SalesController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {


  const self = this;


  // gets all sale items from DB
  StoreFactory.getSaleItems();
  // return of all sale items from DB
  self.items = StoreFactory.sale_items;


  // button click listener
  self.buy = (item_id) => {
    // item bought by ID
    console.log(item_id);
  };


}]); // end myAPP.controller
