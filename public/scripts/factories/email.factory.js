
myApp.factory('EmailFactory',['$http', '$window', '$location', 'alertify',function($http, $window, $location, alertify) {

  console.log('EmailFactory Running...');

  // defining alertify options
  alertify.logPosition('top right');


  // sending comment to server for emailing
  function sendComment(comment) {
    $http({
      method: 'POST',
      url: '/contact/sendComment',
      data: comment
    }).then(function(response){
      // alertify.success(comment.firstName + ' ' + comment.lastName + ", Your comment has been submitted to an Anna's Bananas employee for review");
      $location.path('/landing');
    }).catch(function(error) {
      alertify.error('Error sending comment. Pleae try again')
      console.log('error sending comment to server: ', error);
    });
  };





//public API
  return {
    sendComment : sendComment
  };


}]);
