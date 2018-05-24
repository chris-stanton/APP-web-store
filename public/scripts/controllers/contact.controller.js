
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('ContactController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  const self = this;

  // setting init values
  self.buttonStatus = 'active';
  self.contactMessage = {};

  // removes input error background color on each button click
  function inputBackgroundReset(){
    $scope.firstName = 'background-reset';
    $scope.lastName = 'background-reset';
    $scope.email = 'background-reset';
    $scope.message = 'background-reset';
  };

  // submit button click listener
  self.sendMessage = (contactMessage, buttonStatus) => {
    inputBackgroundReset();
    if (contactMessage.firstName === null || contactMessage.firstName === '' || contactMessage.firstName === undefined){
      $scope.firstName = 'background-red';
      alertify.alert('Please add your FIRST NAME');
      console.log('user missing first name');
    } else if(contactMessage.lastName === null || contactMessage.lastName === '' || contactMessage.lastName === undefined) {
      $scope.lastName = 'background-red';
      alertify.alert('Please add your LAST NAME');
      console.log('user missing last name');
    } else if(contactMessage.email === null || contactMessage.email === '' || contactMessage.email === undefined) {
      $scope.email = 'background-red';
      alertify.alert('Please add your EMAIL ADDRESS');
      console.log('user missing email address');
    } else if(contactMessage.message === null || contactMessage.message === '' || contactMessage.message === undefined) {
      $scope.message = 'background-red';
      alertify.alert('Please add a MESSAGE');
      console.log('user missing message');
    } else {
      alertify.confirm("click OK to email message to Chris", (buttonStatus) => {
        // ----- if user selects OK ------ //
        self.buttonStatus = 'inactive';
        EmailFactory.sendMessage(contactMessage);
        // db query goes here
      }, (buttonStatus) => {
        // ----- if user selects CANCEL ------ //
        self.buttonStatus = 'active';
        alertify.log('The submission process has been cancelled')
      }); // end alert dialog
    }; // end else/if
  }; // end sendMessage()





}]); // end myAPP.controller
