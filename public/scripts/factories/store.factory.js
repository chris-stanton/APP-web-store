
myApp.factory('StoreFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');


  let sale_items = { list:[] };



  function getSaleItems() {
    $http({
      method: 'GET',
      url: '/sale/getSaleItems'
    }).then(function(response) {
      sale_items.list = response.data;
    });
  };








  //public API
  return {
    // DB call for all sale items
    getSaleItems : getSaleItems,
    sale_items : sale_items

  };


}]); // end myApp.factory()
