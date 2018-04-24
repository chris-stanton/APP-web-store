
myApp.controller('SalesController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.items = [
    {
      id: 0,
      blank: 'Noodle w/intregated nitinol spring bobber',
      blank_length: '28',
      guides: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      wraps: 'Blank matching',
      price: '150',
      sale_price:'120',
      sale_active: true,
      img_0: 'vikings/1.png',
      img_1: 'vikings/2.png',
      img_2: 'vikings/3.png',
      img_3: 'vikings/4.png',
      notes: 'mn vikings',
      active: true
    },
    {
      id: 1,
      blank: 'Medium Carbon',
      blank_length: '32',
      guides: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      wraps: 'Glow green',
      price: '150',
      sale_price:'120',
      sale_active: true,
      img_0: 'walleye/1.png',
      img_1: 'walleye/2.png',
      img_2: 'walleye/3.png',
      img_3: 'walleye/4.png',
      notes: 'medium heavy walleye',
      active: true
    }
  ];

  // button click listener
  self.buy = (item_id) => {
    console.log(item_id);
  };






}]); // end myAPP.controller
