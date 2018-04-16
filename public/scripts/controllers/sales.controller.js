
myApp.controller('SalesController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.items = [
    {
      id: 0,
      blank: 'Noodle w/intregated nitinol spring bobber',
      blank_length: '28',
      guides: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      guide_wraps: 'Blank matching',
      special_wrap: 'Purple, neon yellow, white tiger wrap',
      price: '150',
      sale_price:'120'
      // img_0: 'vikings/img_0.png',
      // img_1: 'vikings/img_1.png',
      // img_2: 'vikings/img_2.png',
      // img_3: 'vikings/img_3.png'
    },
    {
      id: 0,
      blank: 'Medium Carbon',
      blank_length: '32',
      guides: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      guide_wraps: 'Glow green',
      special_wrap: 'Kiwi, dark blue, red tiger wrap',
      price: '150',
      sale_price:'120'
      // img_0: 'walleye/img_0.png',
      // img_1: 'walleye/img_1.png',
      // img_2: 'walleye/img_2.png',
      // img_3: 'walleye/img_3.png'
    }
  ];






}]); // end myAPP.controller
