
// Copyright (c) 2018 Christopher J. Stanton
myApp.factory('StoreFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // DB response containers
  let sale_items = { list:[] };


  // gets all products where sale is active
  function getSaleItems() {
    $http({
      method: 'GET',
      url: '/sale/getSaleItems'
    }).then(function(response) {
      sale_items.list = response.data;
    }).catch(function(error) {
      alertify.alert("Error with GET request to DB for all sale items");
        console.log('Error with GET request to DB for all sale items: ', error);
    });
  };








  //public API
  return {
    // DB call for all sale items
    getSaleItems : getSaleItems,
    // DB return for all sale items
    sale_items : sale_items

  };


}]); // end myApp.factory()
