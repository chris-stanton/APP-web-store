
// Copyright (c) 2018 Christopher J. Stanton
myApp.factory('GallaryFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // DB response containers
  let gallary_pics = { list:[] };
  let imageDetails = { list:[] };


  // gets all active images
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

  //gets image details by ID
  function getImgDetails(image_id) {
    $http({
      method: 'GET',
      url: '/gallary/getImgDetails/' + image_id,
      headers: {
        image_id : image_id
      }
    }).then(function(response) {
      imageDetails.list = response.data;
    }).catch(function(error) {
      alertify.alert("Error with GET request to DB for image details");
        console.log('Error with GET request to DB for image details: ', error);
    });
  };








  //public API
  return {
    // DB call for all gallary pics
    getGallary : getGallary,
    // DB return for all gallary pics
    gallary_pics : gallary_pics,
    // BD call for pic details by id
    getImgDetails : getImgDetails,
    // DB return for for specific pic details
    imageDetails : imageDetails
  };


}]); // end myApp.factory()
