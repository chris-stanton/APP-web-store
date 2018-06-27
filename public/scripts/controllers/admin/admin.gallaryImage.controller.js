
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
  self.updateGallaryImage = (imageDetail) => {
    console.log(imageDetail);
    alertify.confirm('Select OK to update image', function(buttonStatus){
      self.buttonStatus = 'inactive';
      alertify.success('Image Updated')
    },
    function(buttonStatus){
      self.buttonStatus = 'active';
      alertify.log('The submission process has been cancelled')
    });
  };








}]); // end myAPP.controller
