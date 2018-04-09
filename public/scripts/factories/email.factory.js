
myApp.factory('EmailFactory',['$http', '$window', '$location', 'alertify',function($http, $window, $location, alertify) {

  console.log('EmailFactory Running...');

  // defining alertify options
  alertify.logPosition('top right');

  // sending form-one to server
  function postFormOne(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_one/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/checkpoint-one');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending form-one to server: ', error);
    });
  };

  // sending form-two to server
  function postFormTwo(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_two/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/checkpoint-two');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending form-two to server: ', error);
    });
  };

  // sending form-three to server
  function postFormThree(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_three/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/checkpoint-three');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending form-three to server: ', error);
    });
  };

  // sending form-four to server
  function postFormFour(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_four/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/checkpoint-four');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending form-four to server: ', error);
    });
  };

  // sending form-five to server
  function postFormFive(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_five/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/checkpoint-five');
    }).catch(function(error) {
      alertify.error('Error sending form 5. Pleae try again')
      console.log('error sending form-five to server: ', error);
    });
  };

  // sending form-six to server
  function postFormSix(form) {
    alertify.delay(2000);
    alertify.log('Packaging information and validating request')
    $http({
      method: 'POST',
      url: '/form_six/submit',
      data: form
    }).then(function(response){
      alertify.success("Form has been submitted to an Anna's Bananas Personal for review");
      $location.path('/complete');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending form-six to server: ', error);
    });
  };

  // sending comment to server for emailing
  function sendComment(comment) {
    alertify.delay(2500);
    alertify.log(comment.firstName + ' ' + comment.lastName + ', Prepairing your comment to be sent...')
    $http({
      method: 'POST',
      url: '/contact/sendComment',
      data: comment
    }).then(function(response){
      alertify.success(comment.firstName + ' ' + comment.lastName + ", Your comment has been submitted to an Anna's Bananas employee for review");
      $location.path('/landing');
    }).catch(function(error) {
      alertify.error('Error sending comment. Pleae try again')
      console.log('error sending comment to server: ', error);
    });
  };





//public API
  return {
    postFormOne : postFormOne,
    postFormTwo : postFormTwo,
    postFormThree : postFormThree,
    postFormFour : postFormFour,
    postFormFive : postFormFive,
    postFormSix : postFormSix,
    sendComment : sendComment
  };


}]);
