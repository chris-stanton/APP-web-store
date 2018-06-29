
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmingallaryimageController',['GallaryFactory', 'alertify', '$scope', '$routeParams', '$location', function(GallaryFactory, alertify, $scope, $routeParams, $location) {

  const self = this;
  self.buttonStatus = 'active';

  // image ID number passed on from admin gallary view
  let image_id = $routeParams.id;

  // gets specific image by ID
  GallaryFactory.getImgDetails(image_id);
  // return of specific image details from DB
  self.imageDetails = GallaryFactory.imageDetails;

  // updates image
  self.updateImage = () => {
    console.log("update image button click");
    // self.buttonStatus = '';
    alertify.confirm('Select OK to update image',
      function(){
        // needs to be fired with factory response
        // remain in the same view
        alertify.success('Image Updated');
      },
      function(){
        alertify.log('Updating image has been cancelled');
      }
    );
  }; // end updateImage()


  // updates ALL image and details
  self.updateGallaryImage = (imageDetail, buttonStatus) => {
    console.log(imageDetail);
    // self.buttonStatus = '';
    alertify.confirm('Select OK to update image and tooltip',
      function(imageDetail){
        self.buttonStatus = "inactive";
        // needs to be fired with factory response
        // $location.path('/admin_gallary');
        alertify.success('Image and tooltip Updated');
      },
      function(imageDetail){
        self.buttonStatus = "active";
        alertify.log('Updating image and tooltip has  been cancelled');
      }
    );
  }; // end updateGallaryImage()








}]); // end myAPP.controller
