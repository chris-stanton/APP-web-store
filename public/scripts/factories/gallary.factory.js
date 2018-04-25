
myApp.factory('GallaryFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // DB response containers
  let gallary_pics = { list:[] };



  function getGallary() {
    $http({
      method: 'GET',
      url: '/gallary/getGallary'
    }).then(function(response) {
      gallary_pics.list = response.data;
    }).catch(function(error) {
      alertify.alert("Error with GET request to DB for landing gallary pics");
        console.log('Error with GET request to DB for landing gallary pics: ', error);
    });
  };








  //public API
  return {
    // DB call for all gallary pics
    getGallary : getGallary,
    // DB return for all gallary pics
    gallary_pics : gallary_pics

  };


}]); // end myApp.factory()
