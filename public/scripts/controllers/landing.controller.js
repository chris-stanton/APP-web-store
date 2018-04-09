
myApp.controller('LandingController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  console.log("landing controller running...");
  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');


}]); // end myAPP.controller
