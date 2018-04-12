
myApp.controller('ContactController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

console.log('controller running');



}]); // end myAPP.controller
