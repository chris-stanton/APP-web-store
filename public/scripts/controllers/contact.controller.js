
myApp.controller('ContactController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  const self = this;

  self.buttonStatus = 'active';
  self.contactMessage = {};

  // submit button click listener
  self.sendMessage = (contactMessage, buttonStatus) => {
    if (contactMessage.firstName === null || contactMessage.firstName === '' || contactMessage.firstName === undefined){
      alertify.alert('Please add your FIRST NAME');
      console.log('user missing first name');
    } else if(contactMessage.lastName === null || contactMessage.lastName === '' || contactMessage.lastName === undefined) {
      alertify.alert('Please add your LAST NAME');
      console.log('user missing last name');
    } else if(contactMessage.email === null || contactMessage.email === '' || contactMessage.email === undefined) {
      alertify.alert('Please add your EMAIL ADDRESS');
      console.log('user missing email address');
    } else if(contactMessage.message === null || contactMessage.message === '' || contactMessage.message === undefined) {
      alertify.alert('Please add a MESSAGE');
      console.log('user missing message');
    } else {
      alertify.confirm("click OK to email message to Chris", (buttonStatus) => {
        // ----- if user selects OK ------ //
        self.buttonStatus = 'inactive';
        EmailFactory.sendMessage(contactMessage);
      }, (buttonStatus) => {
        // ----- if user selects CANCEL ------ //
        console.log('submission was canceled by the user');
        self.buttonStatus = 'active';
        alertify.log('The submission process has been cancelled')
      }); // end alert dialog
    }; // end else/if
  }; // end sendMessage()





}]); // end myAPP.controller
