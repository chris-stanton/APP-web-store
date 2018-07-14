
// Copyright (c) 2018 Christopher J. Stanton
myApp.factory('StoreFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // DB response containers
  let inventoryItems = { list:[] };
  let sale_items = { list:[] };


  // gets all products
  function getAllInventroy() {
    $http({
      method: 'GET',
      url: '/store/getAllInventory'
    }).then(function(response) {
      inventoryItems.list = response.data;
    }).catch(function(error) {
      alertify.alert("Error with GET request to DB for all inventory items");
        console.log('Error with GET request to DB for all inventory items: ', error);
    });
  };


  // gets all products where sale is active
  function getSaleItems() {
    $http({
      method: 'GET',
      url: '/store/getSaleItems'
    }).then(function(response) {
      sale_items.list = response.data;
    }).catch(function(error) {
      alertify.alert("Error with GET request to DB for all sale items");
        console.log('Error with GET request to DB for all sale items: ', error);
    });
  };








  //public API
  return {
    // gets alll inventory items from bd
    getAllInventroy : getAllInventroy,
    // return of all inventory intems from DB
    inventoryItems : inventoryItems,
    // DB call for all sale items
    getSaleItems : getSaleItems,
    // DB return for all sale items
    sale_items : sale_items

  };


}]); // end myApp.factory()
