
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryimageController',['GallaryFactory', 'alertify', '$scope', '$routeParams', '$location', function(GallaryFactory, alertify, $scope, $routeParams, $location) {

  const self = this;

  console.log('image_id: ' + $routeParams.id);

  let image_id = $routeParams.id;

  GallaryFactory.getImgDetails(image_id);
  self.imageDetails = GallaryFactory.imageDetails;







}]); // end myAPP.controller
