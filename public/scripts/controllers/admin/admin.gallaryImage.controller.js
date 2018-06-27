
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryimageController',['GallaryFactory', 'alertify', '$scope', '$routeParams', '$location', function(GallaryFactory, alertify, $scope, $routeParams, $location) {

  const self = this;
  self.buttonStatus = 'active';

  // image ID number passed on from admin gallary view
  let image_id = $routeParams.id;

  // gets specific image by ID
  GallaryFactory.getImgDetails(image_id);
  // return of specific imge details from DB
  self.imageDetails = GallaryFactory.imageDetails;

  // updates image details
  self.updateGallaryImage = (imageDetail, buttonStatus) => {
    console.log(imageDetail);
    // self.buttonStatus = '';
    alertify.confirm('Select OK to update image',
      function(imageDetail){
        self.buttonStatus = "inactive";
        // needs to be fired with factory response
        alertify.success('Image Updated');
        // $location.path('/admin_gallary');
      },
      function(imageDetail){
        self.buttonStatus = "active";
        alertify.log('The submission process has been cancelled');
      }
    );
  }; // end updateGallaryImage()








}]); // end myAPP.controller
