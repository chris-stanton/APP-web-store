
myApp.factory('EmailFactory',['$http', '$location', 'alertify',function($http, $location, alertify) {

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');


  // sending comment to server for emailing
  function sendMessage(contactMessage) {
    $http({
      method: 'POST',
      url: '/contact/sendMessage',
      data: contactMessage
    }).then((response) => {
      alertify.success(contactMessage.firstName + ' ' + contactMessage.lastName + ", Thank you for submitting your question/comment");
      $location.path('/landing');
    }).catch((error) => {
      alertify.error('Error sending comment. Pleae try again')
      console.log('error sending comment to server: ', error);
    });
  }; // end sendMessage()





  //public API
  return {
    sendMessage : sendMessage
  };


}]); // end myApp.factory()
