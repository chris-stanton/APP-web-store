
myApp.controller('LandingController',['GallaryFactory', 'alertify', '$scope', function(GallaryFactory, alertify, $scope) {

  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // calls DB for all gallary pics
  GallaryFactory.getGallary();
  // DB return of all galary pics
  self.gallaryInfo = GallaryFactory.gallary_pics;




}]); // end myAPP.controller
