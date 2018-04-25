
myApp.controller('LandingController',['GallaryFactory', 'alertify', '$scope', function(GallaryFactory, alertify, $scope) {

  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');


  GallaryFactory.getGallary();
  self.gallaryInfo = GallaryFactory.gallary_pics;


  
}]); // end myAPP.controller
