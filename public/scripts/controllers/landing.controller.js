
myApp.controller('LandingController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  const self = this;

  // defining alertify options
  alertify.delay(5000);
  alertify.logPosition('top right');

  // gallary images
  self.gallaryInfo = [
    {
      image: './assets/images/gallary/1.jpg',
      tooltip: 'Three thread tiger wrap, 5" cork grip'
    },
    {
      image: './assets/images/gallary/2.jpg',
      tooltip: 'Three thread tiger wrap, split cork grip'
    },
    {
      image: './assets/images/gallary/3.jpg',
      tooltip: 'Four thread tiger, 6`6" RodGeeks C266MLXF'
    },
    {
      image: './assets/images/gallary/4.jpg',
      tooltip: 'Fully closed off wrap, 5" 3D printed grip'
    },
    {
      image: './assets/images/gallary/5.jpg',
      tooltip: 'Three thread tiger wrap, White camo hydrodipped noodle blank, 3" cork grip'
    },
    {
      image: './assets/images/gallary/6.jpg',
      tooltip: 'Three thread tiger, 6`6" RodGeeks C266MLXF'
    },
    {
      image: './assets/images/gallary/7.jpg',
      tooltip: 'Three thread tiger wrap, Orange camo hydrodipped noodle blank, 3" cork grip'
    },
    {
      image: './assets/images/gallary/8.jpg',
      tooltip: 'Razor pink spiral wrap'
    },
    {
      image: './assets/images/gallary/9.jpg',
      tooltip: 'Green Bay Packers razor spiral wrap'
    },
    {
      image: './assets/images/gallary/10.jpg',
      tooltip: 'Open water tiger wrapped rods'
    },
    {
      image: './assets/images/gallary/11.jpg',
      tooltip: '3 matching MN Vikings tiger wrapped noodle rods'
    },
    {
      image: './assets/images/gallary/12.jpg',
      tooltip: 'Four thread tiger with one off custom modlded fiberglass grip'
    }
  ];



}]); // end myAPP.controller
