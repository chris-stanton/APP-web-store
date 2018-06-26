
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryimageController',['GallaryFactory', 'alertify', '$scope', '$routeParams', '$location', function(GallaryFactory, alertify, $scope, $routeParams, $location) {

  const self = this;
  self.buttonStatus = 'button-active';

  // image ID number passed on from admin gallary view
  let image_id = $routeParams.id;

  // gets specific image by ID
  GallaryFactory.getImgDetails(image_id);
  // return of specific imge details from DB
  self.imageDetails = GallaryFactory.imageDetails;

  // updates image details
  self.updateGallaryImage = (imageDetail) => {
    console.log(imageDetail);
    alertify.confirm("click OK to update gallary image details", () => {
      // ----- if user selects OK ------ //
      self.buttonStatus = 'button-inactive';
    }, () => {
      // ----- if user selects CANCEL ------ //
      console.log('user clicked cancel');
      self.buttonStatus = 'button-active';
      alertify.log('The submission process has been cancelled')
    }); // end alert dialog
  };








}]); // end myAPP.controller
