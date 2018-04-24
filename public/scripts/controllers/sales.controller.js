
myApp.controller('SalesController',['StoreFactory', 'alertify', '$scope', function(StoreFactory, alertify, $scope) {

  const self = this;

  self.items = [
    {
      id: 0,
      blank: 'Noodle w/intregated nitinol spring bobber',
      length: '28',
      guide: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      wrap: 'Blank matching',
      price: '150',
      sale_price:'120',
      sale_active: true,
      img_0: 'vikings/1.png',
      img_1: 'vikings/2.png',
      img_2: 'vikings/3.png',
      img_3: 'vikings/4.png',
      details: 'mn vikings',
      active: true
    },
    {
      id: 1,
      blank: 'Medium Carbon',
      length: '32',
      guide: 'Standard light weight fly guides',
      handle: '5" Tapered Cork',
      wrap: 'Glow green',
      price: '150',
      sale_price:'120',
      sale_active: true,
      img_0: 'walleye/1.png',
      img_1: 'walleye/2.png',
      img_2: 'walleye/3.png',
      img_3: 'walleye/4.png',
      details: 'medium heavy walleye',
      active: true
    }
  ];

  // button click listener
  self.buy = (item_id) => {
    console.log(item_id);
  };






}]); // end myAPP.controller
