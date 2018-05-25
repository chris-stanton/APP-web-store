
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryController',['GallaryFactory', 'alertify', '$scope', '$routeParams', '$location', function(GallaryFactory, alertify, $scope, $routeParams, $location) {

  const self = this;

  self.message = "this worked";

  // calls DB for all gallary pics
  GallaryFactory.getGallary();
  // DB return of all galary pics
  self.gallaryInfo = GallaryFactory.gallary_pics;

  self.getDetails = (image_id) => {
    $routeParams.image_id = image_id;
    $location.path('admin_gallaryImage/'+$routeParams.image_id);
  };





}]); // end myAPP.controller
