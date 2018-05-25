
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryController',['GallaryFactory', 'alertify', '$scope', function(GallaryFactory, alertify, $scope) {

  const self = this;

  self.message = "this worked";

  // calls DB for all gallary pics
  GallaryFactory.getGallary();
  // DB return of all galary pics
  self.gallaryInfo = GallaryFactory.gallary_pics;

  self.getDetails = (image_id) => {
    console.log(image_id);
    alertify.confirm("GET DETAILS?");
  };





}]); // end myAPP.controller
