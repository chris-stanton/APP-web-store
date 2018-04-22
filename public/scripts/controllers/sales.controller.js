
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
      other_wrap: 'Purple, neon yellow, white tiger wrap',
      price: '150',
      sale_price:'120',
      img_0: 'vikings/1.png',
      img_1: 'vikings/2.png',
      img_2: 'vikings/3.png',
      img_3: 'vikings/4.png'
    },
    {
      id: 1,
      blank: 'Medium Carbon',
      blank_length: '32',
      guides: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      guide_wraps: 'Glow green',
      other_wrap: 'Kiwi, dark blue, red tiger wrap',
      price: '150',
      sale_price:'120',
      img_0: 'walleye/1.png',
      img_1: 'walleye/2.png',
      img_2: 'walleye/3.png',
      img_3: 'walleye/4.png'
    }
  ];






}]); // end myAPP.controller
